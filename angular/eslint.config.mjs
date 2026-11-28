import { defineConfig, globalIgnores } from "eslint/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

import angular from 'angular-eslint';
import ngrx from '@ngrx/eslint-plugin';

export default defineConfig([globalIgnores(["projects/**/*"]), {
    files: ["**/*.ts"],

    extends: [
        ...angular.configs.tsRecommended,
    ],

    processor: angular.createProcessor(),

    languageOptions: {
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            project: ["tsconfig.json"],
            createDefaultProgram: true,
        },
    },

    rules: {
        "@angular-eslint/component-selector": ["error", {
            prefix: "app",
            style: "kebab-case",
            type: "element",
        }],

        "@angular-eslint/directive-selector": ["error", {
            prefix: "app",
            style: "camelCase",
            type: "attribute",
        }],
    },
}, {
    files: ["**/*.html"],
    extends: [...angular.configs.templateRecommended],
    rules: {},
}, {
    files: ["**/*.ts"],
    extends: [...ngrx.configs.all],
}]);