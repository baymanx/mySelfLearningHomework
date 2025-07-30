#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
void matmul(int n, double *a, double *b, double *c) {
    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < n; ++j) {
            double sum = 0;
            for (int k = 0; k < n; ++k) {
                sum += a[i*n + k] * b[k*n + j];
            }
            c[i*n + j] = sum;
        }
    }
}