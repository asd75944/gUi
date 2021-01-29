const fs = require('fs');
const path = require('path');
const version = process.env.VERSION || require('../../package.json').version;
const content = { '1.0.0': '1.0' };

if (!content[version]) content[version] = '1.0';

fs.writeFileSync(path.resolve(__dirname, '../../examples/versions.json'), JSON.stringify(content));
