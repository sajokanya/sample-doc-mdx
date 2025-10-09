const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'config-properties-metadata', 'spring-configuration-metadata.json');
const outputPath = path.join(__dirname, 'spring-configuration-table.mdx');

const data = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));
const groups = data.groups || [];
const properties = data.properties || [];

// Map group type to group name for subheadings
const typeToGroupName = {};
groups.forEach(group => {
  typeToGroupName[group.type] = group.name;
});

// Group properties by sourceType
const groupedProps = {};
properties.forEach(prop => {
  const type = prop.sourceType;
  if (!groupedProps[type]) groupedProps[type] = [];
  groupedProps[type].push(prop);
});

let mdxContent = `# Spring Configuration Properties\n\n`;

Object.keys(groupedProps).forEach(type => {
  const groupName = typeToGroupName[type] || type;
  mdxContent += `## ${groupName}\n\n`;
  mdxContent += `| Key | Description | Default value |\n`;
  mdxContent += `| --- | ----------- | ------------ |\n`;
  groupedProps[type].forEach(prop => {
    const key = prop.name || '';
    const desc = prop.description ? prop.description.replace(/\|/g, '\\|') : '';
    const def = prop.defaultValue !== undefined
      ? (Array.isArray(prop.defaultValue)
          ? '`[' + prop.defaultValue.map(v => v.toString()).join(', ') + ']`'
          : `\`${prop.defaultValue}\``)
      : '';
    mdxContent += `| ${key} | ${desc} | ${def} |\n`;
  });
  mdxContent += `\n`;
});

fs.writeFileSync(outputPath, mdxContent, 'utf-8');
console.log(`MDX tables generated at ${outputPath}`);