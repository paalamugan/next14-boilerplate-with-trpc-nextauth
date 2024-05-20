module.exports = {
  '**/*.{js,mjs,ts,tsx,md,mdx}': [
    'eslint --no-ignore --max-warnings 0 --fix ',
    'prettier --check --write',
  ],
  '**/*.ts?(x)': () => 'npm run type-check',
  '**/*.css': ['stylelint --allow-empty-input --max-warnings 0', 'prettier --write'],
  '**/*.{json,yaml}': ['prettier --check --write'],
};
