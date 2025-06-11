import "eslint-plugin-only-warn";
import jslint from "@eslint/js";
import prettierEslintConfig from "eslint-config-prettier";
import tslint from "typescript-eslint";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */

export const eslintBaseConfig = [
  jslint.configs.recommended, // this is an object that has only one property with name => rules, include basic rules for js notation
  prettierEslintConfig, // an object with rules property
  ...tslint.configs.recommendedTypeChecked, // include recommended and type checking rules
  ...tslint.configs.eslintRecommended, // disable core eslint rules that check by typescript compiler
  ...tslint.configs.stylisticTypeChecked,
  {
    ignores: [
      "**/*.test.ts",
      "**/*.test.js",
      "*.config.[jt]s",
      "**/*.d.ts",
      "dist",
    ],
  },
];
