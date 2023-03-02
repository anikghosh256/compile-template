# @anikghosh256/compile-template

[![Build and Test](https://github.com/anikghosh256/compile-template/actions/workflows/node.js.yml/badge.svg)]()  [![NPM version](https://img.shields.io/npm/v/@anikghosh256/compile-template.svg)](https://www.npmjs.com/package/@anikghosh256/compile-template) ![NPM](https://img.shields.io/npm/l/@anikghosh256/compile-template)

Minimal templates for Node.js

## Installation

```bash
npm install @anikghosh256/compile-template
```

## Usage

```js
const compile = require('@anikghosh256/compile-template');

const compiled = compile('filedir/filename.ct', { name: 'John' }); // filepath and variables
```

## Full example

```bash
├── root
│   ├── index.js
│   └── template.ct # template file you can use any extension
```
    
```js
// index.js
const compile = require('@anikghosh256/compile-template');

const compiled = compile('template.ct', { name: 'John' }); 
console.log(compiled); // you can also write to a file or do whatever you want with the compiled template
```

```html
<!-- template.ct -->
<h1>Hello, ${name}!</h1>
```

```html
<!-- output -->
<h1>Hello, John!</h1>
```
