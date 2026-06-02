const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// A simple HTML tag nesting parser
function validateHTML(html) {
    const tagRegex = /<\/?([a-zA-Z0-9\-]+)(?:\s+[^>]*)?>/g;
    const stack = [];
    let match;
    const selfClosing = new Set([
        'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr',
        'path', 'circle', 'rect', 'line', 'polygon', 'polyline', 'use', 'stop'
    ]);

    let lines = html.split('\n');
    
    // Find all tags with line numbers
    const tags = [];
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        let localMatch;
        const lineTagRegex = /<\/?([a-zA-Z0-9\-]+)(?:\s+[^>]*)?>/g;
        while ((localMatch = lineTagRegex.exec(line)) !== null) {
            const tagName = localMatch[1].toLowerCase();
            const isClosing = localMatch[0].startsWith('</');
            
            // Check if it is a self-closing tag in the tag itself (ends with />)
            const isSelfClosingInline = localMatch[0].endsWith('/>');
            
            tags.push({
                name: tagName,
                isClosing: isClosing,
                isSelfClosingInline: isSelfClosingInline,
                line: i + 1,
                full: localMatch[0]
            });
        }
    }

    console.log(`Parsed ${tags.length} tags.`);

    for (const tag of tags) {
        if (selfClosing.has(tag.name) || tag.isSelfClosingInline) {
            if (tag.isClosing) {
                console.log(`Warning: Self-closing tag '${tag.name}' has a closing tag on line ${tag.line}: ${tag.full}`);
            }
            continue;
        }

        if (!tag.isClosing) {
            stack.push(tag);
        } else {
            if (stack.length === 0) {
                console.error(`Error: Mismatched closing tag '${tag.name}' on line ${tag.line} (stack is empty): ${tag.full}`);
                return false;
            }
            const last = stack.pop();
            if (last.name !== tag.name) {
                console.error(`Error: Mismatched closing tag '${tag.name}' on line ${tag.line} (expected '${last.name}' opened on line ${last.line}): ${tag.full}`);
                return false;
            }
        }
    }

    if (stack.length > 0) {
        console.error(`Error: Unclosed tags left in stack:`);
        for (const tag of stack) {
            console.error(` - '${tag.name}' opened on line ${tag.line}: ${tag.full}`);
        }
        return false;
    }

    console.log('HTML nesting is perfectly valid!');
    return true;
}

validateHTML(html);
