import type { Preview } from "@storybook/react";
import "../src/styles/globals.scss";

// .storybook/preview.js|ts

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
      viewports: {
        breakpointSmall: {
          name: "Breakpoint - Small",
          styles: {
            height: "900px",
            width: "400px",
          },
          type: "mobile",
        },
        breakpointMedium: {
          name: "Breakpoint - Medium",
          styles: {
            height: "1067px",
            width: "600px",
          },
          type: "mobile",
        },
        breakpointLarge: {
          name: "Breakpoint - Large",
          styles: {
            height: "1200px",
            width: "900px",
          },
          type: "tablet",
        },
        contentMaxWidth: {
          name: "Content Max Width",
          styles: {
            height: "1334px",
            width: "1000px",
          },
          type: "tablet",
        },
        beyondContentMaxWidth: {
          name: "Beyond Content Max Width",
          styles: {
            height: "1708px",
            width: "1280px",
          },
          type: "tablet",
        },
      },
    },
  },
};

export default preview;
