import React from "react";

import { storiesOf } from "@storybook/react";
import { SwitchButton } from '../SwitchButton';

storiesOf("SwitchButton", module)
  .addParameters({ jest: ["SwitchButton.test.js"] })
  .add("button", () => <SwitchButton />);

