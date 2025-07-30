```
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk
emsdk install latest
emsdk activate latest
emsdk_env.bat
emcc -v

emcc matrix.c -O3 -s WASM=1 -s MODULARIZE=1 -s EXPORT_NAME="createModule" -s EXPORT_ES6=0 -s EXPORTED_FUNCTIONS="['_matmul','_malloc','_free']" -s EXPORTED_RUNTIME_METHODS="['cwrap','getValue','setValue','HEAPU8','HEAPF64']" -s ALLOW_MEMORY_GROWTH=1 -o matrix.js

node test.js
