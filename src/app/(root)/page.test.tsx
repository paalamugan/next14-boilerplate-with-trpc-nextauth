import { render, screen } from '@testing-library/react';

import Index from './page';

describe('Index page', () => {
  describe('Render method', () => {
    it('should have welcome text', () => {
      render(<Index />);

      const text = screen.getByText('Welcome to our Home page');

      expect(text).toBeInTheDocument();
    });
  });
});
