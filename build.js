const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'index.html');
let htmlContent = fs.readFileSync(indexPath, 'utf8');

const timestamp = Date.now();

// Update styles.css version
if (htmlContent.includes('styles.css')) {
    htmlContent = htmlContent.replace(/styles\.css(\?v=\d+)?/, `styles.css?v=${timestamp}`);
}

// Update script.js version
if (htmlContent.includes('script.js')) {
    htmlContent = htmlContent.replace(/script\.js(\?v=\d+)?/, `script.js?v=${timestamp}`);
}

fs.writeFileSync(indexPath, htmlContent, 'utf8');
console.log(`Successfully bumped assets to version: ${timestamp}`);