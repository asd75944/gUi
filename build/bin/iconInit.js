'use strict';

let postcss = require('postcss')
const fs = require('fs')
const path = require('path')
const fontFile = fs.readFileSync(path.resolve(__dirname, '../../packages/theme-chalk/src/icon.scss'), 'utf8');
const nodes = postcss.parse(fontFile).nodes;
const classList = [];

nodes.forEach(node => {
  const selector = node.selector || '';
  const reg = new RegExp(/\.g-icon-([^:]+):before/);
  const arr = selector.match(reg);

  if (arr && arr[1]) {
    classList.push(arr[1]);
  }
});

classList.reverse(); // 希望按css文件顺序倒叙排列

fs.writeFile(path.resolve(__dirname, '../../examples/icon.json'), JSON.stringify(classList), () => {});
