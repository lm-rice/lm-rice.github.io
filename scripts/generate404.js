const fs = require("fs");
const path = require("path");

const indexPath = path.join("dist", "index.html");
const fallbackPath = path.join("dist", "404.html");

if (!fs.existsSync(indexPath)) {
    console.error("Error: index.html not found in dist. Run 'npm run build' first.");
    process.exit(1);
}

const indexContent = fs.readFileSync(indexPath, "utf-8");

if (!fs.existsSync(fallbackPath) || fs.readFileSync(fallbackPath, "utf-8") !== indexContent) {
    fs.copyFileSync(indexPath, fallbackPath);
    console.log("404.html generated successfully from index.html.");
} else {
    console.log("404.html is already up to date.");
}