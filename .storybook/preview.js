// Import the global style enabling tailwind classes
import "../src/styles/globals.css";

import * as nextImage from "next/image"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: props => <img {...props} />
})
