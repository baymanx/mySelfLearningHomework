const createModule = require('./matrix.js');

createModule().then(Module => {
    const n = 2;
    const a = [1, 2, 3, 4]; // 2x2 矩阵
    const b = [5, 6, 7, 8]; // 2x2 矩阵

    const sizeBytes = n * n * Float64Array.BYTES_PER_ELEMENT;

    const ptrA = Module._malloc(sizeBytes);
    const ptrB = Module._malloc(sizeBytes);
    const ptrC = Module._malloc(sizeBytes);

    // 直接用导出的 HEAPF64
    Module.HEAPF64.set(a, ptrA / 8);
    Module.HEAPF64.set(b, ptrB / 8);

    Module._matmul(n, ptrA, ptrB, ptrC);

    const result = Array.from(
        Module.HEAPF64.subarray(ptrC / 8, ptrC / 8 + n * n)
    );
    console.log('矩阵乘法结果:', result);

    Module._free(ptrA);
    Module._free(ptrB);
    Module._free(ptrC);
});
