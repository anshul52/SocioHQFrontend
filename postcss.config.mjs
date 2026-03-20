import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const candidateRoots = [
  process.env.INIT_CWD,
  process.env.npm_config_local_prefix,
  process.cwd(),
].filter(Boolean);

const packageJsonPath =
  candidateRoots
    .map((root) => path.join(root, "package.json"))
    .find((candidate) => fs.existsSync(candidate)) ?? import.meta.url;

const requireFromProjectRoot = createRequire(packageJsonPath);
const tailwindcss = requireFromProjectRoot("@tailwindcss/postcss");

const config = {
  plugins: [tailwindcss()],
};

export default config;
