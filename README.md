# prettier-windows-changed-only-scripts
Simple unix xargs emulation to pass changed files for prettifier

Example in package.json to execute:
"format:changed": "(git ls-files --modified --others --exclude-standard) | node prettify-changed-only.js '!src/**/*.{js,jsx,d.ts}'"
