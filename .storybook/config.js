import { configure, addDecorator } from '@storybook/react';
import { withTests } from "@storybook/addon-jest";
import results from "./jest-test-results.json";

function loadStories() {
  require('../src/stories');
  require('../src/stories/Button.stories');
  require('../src/stories/SwitchButton.stories');
}

configure(loadStories, module);


addDecorator(
  withTests({
    results
  })
);
