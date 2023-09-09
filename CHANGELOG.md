# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.2.1](https://github.com/zthun/lumberjacky/compare/v1.2.0...v1.2.1) (2023-09-09)


### Bug Fixes

* add Injectable annotation to nest logger ([f654243](https://github.com/zthun/lumberjacky/commit/f6542431d6f622e95c7b44b1c6dbfe00d71657cb))
* do not bundle @nestjs/common ([cded7e8](https://github.com/zthun/lumberjacky/commit/cded7e85386ed9a2c07c5d0d7a1d2854ebfc7b3c))
* export the context logger ([bd78151](https://github.com/zthun/lumberjacky/commit/bd781510e1ffae79efce2499bf0e6de7f47bef46))



## [1.2.0](https://github.com/zthun/lumberjacky/compare/v1.1.0...v1.2.0) (2023-09-09)


### Features

* context in the log entry is now optional ([aa24906](https://github.com/zthun/lumberjacky/commit/aa249067d81775f632645f6a1673d1101cf885f3))
* context logger enables support for a default context when one is not provided ([36840c7](https://github.com/zthun/lumberjacky/commit/36840c7ed7feb33a09209136a41dabede7ff2e84))
* lumberjacky nest enables integration with the nestjs framework ([fcb4727](https://github.com/zthun/lumberjacky/commit/fcb4727aee010996364d37054e8fbc1b7e46879e))



## 1.1.0 (2023-09-02)


### Features

* a logger adds log entries to the system ([aa9a328](https://github.com/zthun/lumberjacky/commit/aa9a3289be6e56b8ec4f463a0bd6f35e5ee06a0b))
* composite logger logs to multiple child loggers ([b330997](https://github.com/zthun/lumberjacky/commit/b330997191336818837bba747de880bdba1debae))
* console logger logs to the console ([de71a36](https://github.com/zthun/lumberjacky/commit/de71a36777ba3d4a53af6da5fee62373c56caf54))
* log entry objects describe what is being logged ([79d7f63](https://github.com/zthun/lumberjacky/commit/79d7f63faef8377e511a6683229ddfefd65885ca))
* lumberjack log sets up interfaces and models for logging information ([448398f](https://github.com/zthun/lumberjacky/commit/448398f1c724696c66b29066116112786456c0db))
* silent logger logs nothing ([ee38091](https://github.com/zthun/lumberjacky/commit/ee380913e86c0ed3709e0ef86be5130db26f4b55))
