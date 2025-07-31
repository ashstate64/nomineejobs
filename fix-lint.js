const fs = require('fs');
const path = require('path');

// Function to recursively find all .tsx and .ts files
function findFiles(dir, extensions = ['.tsx', '.ts']) {
  let results = [];
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      results = results.concat(findFiles(filePath, extensions));
    } else if (extensions.some(ext => file.endsWith(ext))) {
      results.push(filePath);
    }
  }
  
  return results;
}

// Function to fix unescaped entities
function fixUnescapedEntities(content) {
  // Fix common unescaped apostrophes in JSX content
  content = content.replace(/([^&])'/g, "$1&apos;");
  content = content.replace(/^'/g, "&apos;");
  
  // Fix common unescaped quotes in JSX content (but not in attributes)
  content = content.replace(/([^=])"/g, '$1&quot;');
  content = content.replace(/^"/g, '&quot;');
  
  // Fix specific patterns
  content = content.replace(/UK's/g, "UK&apos;s");
  content = content.replace(/it's/g, "it&apos;s");
  content = content.replace(/don't/g, "don&apos;t");
  content = content.replace(/can't/g, "can&apos;t");
  content = content.replace(/we'll/g, "we&apos;ll");
  content = content.replace(/you'll/g, "you&apos;ll");
  content = content.replace(/won't/g, "won&apos;t");
  content = content.replace(/isn't/g, "isn&apos;t");
  content = content.replace(/aren't/g, "aren&apos;t");
  content = content.replace(/doesn't/g, "doesn&apos;t");
  content = content.replace(/hasn't/g, "hasn&apos;t");
  content = content.replace(/haven't/g, "haven&apos;t");
  content = content.replace(/wouldn't/g, "wouldn&apos;t");
  content = content.replace(/shouldn't/g, "shouldn&apos;t");
  content = content.replace(/couldn't/g, "couldn&apos;t");
  
  return content;
}

// Get all files to process
const files = findFiles('./app').concat(findFiles('./components'));

console.log(`Found ${files.length} files to process...`);

let fixedFiles = 0;
let totalFixes = 0;

// Process each file
for (const filePath of files) {
  try {
    const originalContent = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixUnescapedEntities(originalContent);
    
    if (originalContent !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      fixedFiles++;
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

console.log(`\nProcessed ${files.length} files`);
console.log(`Fixed ${fixedFiles} files`);
console.log('Done!');