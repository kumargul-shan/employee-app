import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
 
export default defineConfig([
{
files: ["/*.{js,mjs,cjs}"],
...js.configs.recommended,
languageOptions: {
globals: {
...globals.node
}
}
},
{
files: ["test//*.js"],
languageOptions: {
globals: {
describe: "readonly",
test: "readonly",
expect: "readonly"
}
}
}
]);
 
