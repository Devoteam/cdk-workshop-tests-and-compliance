import * as assertions from "aws-cdk-lib/assertions";

// Task3: Import your Aspects-Package

import { ServerlessAppProps, ServerlessApp } from "../../lib/index";

import * as cdk from "aws-cdk-lib";
import * as nag from "cdk-nag";

const props: ServerlessAppProps = {
  apiHandler: "", // Irrelevant
  apiPath:    "", // Irrelevant
  appPath:    "", // Irrelevant
};

// Task2: Test cdknag rules if they comply with our ServerlessApp
describe("cdknag", () => {
  let myApp: ServerlessApp;

  beforeAll(() => {
    myApp = new ServerlessApp(new cdk.App(), "App", props);
    // Attach cdknag rules => https://github.com/cdklabs/cdk-nag/blob/main/RULES.md
    // ...
  });

  // i.e.
  test("NIST_R4", () => {
    // ...
  });

  // i.e.
  test("NIST_R5", () => {
    // ...
  });

  // ...
});

// Task3: Test custom rules if they comply with our ServerlessApp
describe("custom", () => {
  let myApp: ServerlessApp;

  beforeAll(() => {
    myApp = new ServerlessApp(new cdk.App(), "App", props);
    // Attach custom rules
    // ...
  });

  test("Custom", () => {
    // ...
  });

  // ...
});
