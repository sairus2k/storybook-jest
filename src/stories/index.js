import React from "react";

import { storiesOf } from "@storybook/react";
import results from "../../.storybook/jest-test-results.json";
import { withTests } from "@storybook/addon-jest";

import App from "../App";

storiesOf("App", module)
  .addDecorator(withTests({ results }))
  .add("to Storybook", () => <App />, {
    jest: ["App.test.js"]
  });

