const fs = require('fs');
const path = require('path');

const PROHIBITED_PATTERNS = [
    { pattern: /cookie/i, message: "Unauthorized cookie access detected!" },
    { pattern: /localStorage/i, message: "Storage of sensitive data prohibited!" },
    { pattern: /webRequest\.onBeforeSendHeaders/i, message: "Restricted header modification detected!" },
    { pattern: /eval\(/, message: "Dynamic code evaluation prohibited!" }
];

function audit(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules') audit(fullPath);
        } else if (file.endsWith('.js')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            PROHIBITED_PATTERNS.forEach(p => {
                if (p.pattern.test(content)) {
                    console.error(`SECURITY VIOLATION in ${fullPath}: ${p.message}`);
                    process.exit(1);
                }
            });
        }
    }
}

console.log("Running Zero-Knowledge Security Audit...");
audit('./src');
console.log("Security Audit Passed: No prohibited patterns detected.");
