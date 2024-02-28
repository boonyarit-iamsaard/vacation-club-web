/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
  singleQuote: true,
  importOrder: [
    '<BUILT_IN_MODULES>',
    '',
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/app/(.*)$',
    '^@/assets/(.*)$',
    '^@/components/(.*)$',
    '^@/components/ui/(.*)$',
    '^@/configs/(.*)$',
    '^@/providers/(.*)$',
    '^@/hooks/(.*)$',
    '^@/libs/(.*)$',
    '^@/stores/(.*)$',
    '^@/styles/(.*)$',
    '^@/types/(.*)$',
    '',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
};

module.exports = config;
