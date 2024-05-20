import '../src/styles/globals.css';

import type { Preview } from '@storybook/react';

import { NotificationProvider } from '@/providers/NotificationProvider';

const preview: Preview = {
  parameters: {
    nextjs: { router: { basePath: '' }, appDirectory: true },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    Story => (
      <NotificationProvider viewportClassName="absolute top-0 left-0 list-none">
        <Story />
      </NotificationProvider>
    ),
  ],
};

export default preview;
