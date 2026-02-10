import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      indent: ["error", 2],
      // Space before function parenthesis
      "space-before-function-paren": ["error", "always"],
      // No space inside parentheses
      "space-in-parens": ["error", "never"],
    },
  },
]);
