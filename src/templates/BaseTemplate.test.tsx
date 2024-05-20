import { render, screen } from '@testing-library/react';

import { BaseTemplate } from './BaseTemplate';

describe('Base template', () => {
  describe('Render method', () => {
    it('should have 3 menu items', () => {
      render(
        <BaseTemplate
          leftNav={
            <>
              <li>link 1</li>
              <li>link 2</li>
              <li>link 3</li>
            </>
          }
        >
          {null}
        </BaseTemplate>
      );

      const menuItemList = screen.getAllByRole('listitem');

      expect(menuItemList).toHaveLength(3);
    });
  });
});
