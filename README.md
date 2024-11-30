## Requirements

**On macOS**

- Node.js (`brew install nvm`, `nvm install 22`, `nvm use 22`)
- PNPM (`npm install -g pnpm@9`)

**On Linux**

- Node.js (`nvm install 22`, `nvm use 22`)
- PNPM (`npm install -g pnpm@9`)

## Setup

- `pnpm run setup` (install required dependencies and set up project)

## Usage

- `pnpm t` (run all tests)
- `pnpm run test:specs` (run unit and integration tests)
- `pnpm run test:bazel` (run unit and integration tests with bazel)
- `pnpm run test:knip` (check for unused code)
- `pnpm run test:lint` (check for linting issues)
- `pnpm run test:format` (format code)
- `pnpm run test:spell` (check spelling)

## Issue

Running `pnpm run test:bazel` a second time throws the following error:

```
ERROR: file 'src/app.module.spec.js' is generated by these conflicting actions:
Label: //:test_lib_transpile
RuleClass: swc_compile rule
JavaActionClass: class com.google.devtools.build.lib.analysis.actions.StarlarkAction
Configuration: 279910fa0ef25d0005466d76a6b02363cee7aecf68a1fdb4e00b22c469c92cec
Mnemonic: SWCCompile
Action key: cfa8399c6c0c3810982e2d4e37cc52908a823535a0ea8d84dd7ca7950304588f, c2d770466ed025745907aa0d7308e94d627874ef06b82d1f4000defd548563de
Progress message: Compiling //:test_lib_transpile [swc src/app.module.spec.ts], Compiling //:test_lib_transpile [swc bazel-out/k8-fastbuild/bin/src/app.module.spec.ts]
Action describeKey: Compiling //:test_lib_transpile [swc src/app.module.spec.ts]
  Argument: external/aspect_rules_swc~~swc~swc_linux-x64-gnu/swc-linux-x64-gnu
  Argument: compile
  Argument: --config-file
  Argument: bazel-out/k8-fastbuild/bin/.swcrc
  Argument: --source-maps
  Argument: false
  Argument: --out-file
  Argument: bazel-out/k8-fastbuild/bin/src/app.module.spec.js
  Argument: src/app.module.spec.ts
  Output paths mode: OFF
, Compiling //:test_lib_transpile [swc bazel-out/k8-fastbuild/bin/src/app.module.spec.ts]
  Argument: external/aspect_rules_swc~~swc~swc_linux-x64-gnu/swc-linux-x64-gnu
  Argument: compile
  Argument: --config-file
  Argument: bazel-out/k8-fastbuild/bin/.swcrc
  Argument: --source-maps
  Argument: false
  Argument: --out-file
  Argument: bazel-out/k8-fastbuild/bin/src/app.module.spec.js
  Argument: bazel-out/k8-fastbuild/bin/src/app.module.spec.ts
  Output paths mode: OFF

PrimaryInput: File:[/home/user/Documents/bazel-typescript-esm-conflict[source]]src/app.module.spec.ts, File:[/home/user/Documents/bazel-typescript-esm-conflict[source]]bazel-out/k8-fastbuild/bin/src/app.module.spec.ts
PrimaryOutput: File:[[<execution_root>]bazel-out/k8-fastbuild/bin]src/app.module.spec.js
ERROR: /home/user/Documents/bazel-typescript-esm-conflict/BUILD.bazel:53:11: for src/app.module.spec.js, previous action: action 'Compiling //:test_lib_transpile [swc bazel-out/k8-fastbuild/bin/src/app.module.spec.ts]', attempted action: action 'Compiling //:test_lib_transpile [swc src/app.module.spec.ts]'
Use --verbose_failures to see the command lines of failed build steps.
ERROR: Analysis of target '//:test_lib_transpile' failed; build aborted
INFO: Elapsed time: 0.342s, Critical Path: 0.00s
INFO: 1 process: 1 internal.
ERROR: Build did NOT complete successfully
ERROR: No test targets were found, yet testing was requested
```

The error doesn't appear when running: `bazel clean && pnpm run test:bazel`
