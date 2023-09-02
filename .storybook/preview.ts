import type { Preview } from "@storybook/react";
import "../src/styles/globals.scss";

import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";

// .storybook/preview.js|ts

const customViewports = {
  "Desktop 1200px": {
    name: "Desktop 1200px",
    styles: {
      height: "1000px",
      width: "1200px",
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: { ...MINIMAL_VIEWPORTS, ...customViewports },
    },
  },
};

export default preview;
