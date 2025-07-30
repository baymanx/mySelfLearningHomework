import { readFile } from 'fs/promises';

const buffer = await readFile('./hello.wasm');
const imports = { console: { log: console.log } };
const { instance } = await WebAssembly.instantiate(buffer, imports);
console.log('WASM 返回值:', instance.exports.run());