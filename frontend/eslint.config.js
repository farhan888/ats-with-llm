import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
    react: {
      version: "detect", // Automatically detect the React version from your installed packages
      },
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      // Disable the rule requiring React in scope for JSX (React 17+ new JSX transform)
      "react/react-in-jsx-scope": "off",
    },
  }
]);
