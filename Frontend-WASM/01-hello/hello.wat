(module
  (import "console" "log" (func $log (param i32 i32)))
  (memory (export "memory") 1)
  (data (i32.const 0) "Hello, WASM!\00")
  (func (export "run")
    i32.const 0
    i32.const 14
    call $log
  )
)