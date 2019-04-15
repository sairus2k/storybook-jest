import React from "react";

import { storiesOf } from "@storybook/react";
import { Button } from '../Button';

storiesOf("Button", module)
  .addParameters({ jest: ["Button.test.js"] })
  .add("button", () => <Button />);

