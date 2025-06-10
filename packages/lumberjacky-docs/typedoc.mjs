import { ZTypedocConfigBuilder } from "@zthun/janitor-build-config/typedoc";

export default new ZTypedocConfigBuilder()
  .web()
  .entry("../*")
  .favicon("public/svg/lumberjacky.svg")
  .build();
