import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: { builder: { useSWC: true } },
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    disableTelemetry: true,
  },
  webpack: async webConfig => ({
    ...webConfig,
    // We want to conform as much as possible with our target settings
    target: 'browserslist',
    // Performance Hints do not make sense on Storybook as it is bloated by design
    performance: { hints: false },
    // `nodevu` is a Node.js-specific package that requires Node.js modules
    // this is incompatible with Storybook. So we just mock the module
    resolve: { ...webConfig.resolve, alias: { '@nodevu/core': false } },
    // We need to configure `node:` APIs as Externals to WebPack
    // since essentially they're not supported on the browser
    externals: {
      'node:fs': 'commonjs fs',
      'node:url': 'commonjs url',
      'node:path': 'commonjs path',
      'node:readline': 'commonjs readline',
    },
    // Removes Pesky Critical Dependency Warnings due to `next/font`
    ignoreWarnings: [
      e => e.message.includes('Critical dep') || e.message.includes('was not found in'),
    ],
  }),
};

export default config;
