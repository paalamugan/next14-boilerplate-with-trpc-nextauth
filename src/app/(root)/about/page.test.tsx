import { render, screen } from '@testing-library/react';

import About from './page';

describe('About page', () => {
  describe('Render method', () => {
    it('should have a text starting with `Welcome to our About page`', () => {
      render(<About />);

      const paragraph = screen.getByText(/Welcome to our About page/);

      expect(paragraph).toBeInTheDocument();
    });
  });
});
