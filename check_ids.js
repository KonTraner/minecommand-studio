const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const appJs = fs.readFileSync('app.js', 'utf8');

// Find all IDs in HTML
const idRegex = /id="([^"]+)"/g;
const htmlIds = new Set();
let match;
while ((match = idRegex.exec(html)) !== null) {
    htmlIds.add(match[1]);
}

console.log(`Found ${htmlIds.size} unique IDs in index.html`);

// Extract execInputs list from app.js
const execInputsMatch = appJs.match(/const execInputs = \[\s*([\s\S]*?)\s*\];/);
if (execInputsMatch) {
    const inputsText = execInputsMatch[1];
    const ids = inputsText.split(',').map(s => s.trim().replace(/"/g, ''));
    console.log(`Found ${ids.length} IDs in app.js execInputs list`);
    
    let missingCount = 0;
    ids.forEach(id => {
        if (!htmlIds.has(id)) {
            console.log(`❌ Missing in HTML: ${id}`);
            missingCount++;
        } else {
            console.log(`✔ Present: ${id}`);
        }
    });
    console.log(`Done. ${missingCount} missing IDs.`);
} else {
    console.log('Could not parse execInputs in app.js');
}
