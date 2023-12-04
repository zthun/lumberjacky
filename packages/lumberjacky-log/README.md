# Lumberjacky Log

This is the root log framework that includes the interfaces and cross framework loggers that can be used without the
need of any framework.

## Usage

```sh
npm install @zthun/lumberjacky-log
yarn add @zthun/lumberjacky-log
```

There are 3 loggers that are added in this package that are given to you by default.

| Logger    | Description                                                                                                                        |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Console   | Basic console logger that uses the lumberjacky interface                                                                           |
| Composite | Composite logger that logs to multiple sources                                                                                     |
| Silent    | Silent logger used for unit tests                                                                                                  |
| Context   | Special logger that includes context information for logging. This is framework dependant. Basic console logging doesn't use this. |
