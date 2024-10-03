import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

// Determine if we're in a CI environment
const isCI = process.env.CI === 'true';

export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    // Additional custom rules or overrides
    rules: {
      ...(isCI && { 'no-warning-comments': 'off' }),  // Ignore warnings in CI
      // You can add other rule customizations here
    },
  }
];
