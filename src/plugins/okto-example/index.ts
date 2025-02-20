import {
  Plugin,
  Action,
  Service,
  elizaLogger,
} from "@elizaos/core";
import { oktoExampleAction } from "./actions/oktoExampleAction.ts";

class OktoExamplePlugin implements Plugin {
  readonly name: string = "okto-example";
  readonly description: string = "Example plugin for Okto";

  constructor() {
    elizaLogger.info("initiailizing okto example plugin")
  }

  actions: Action[] = [
    oktoExampleAction(),
  ];

  services: Service[] = [

  ];
}

export { OktoExamplePlugin };