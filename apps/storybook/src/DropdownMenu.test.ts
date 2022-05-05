describe('DropdownMenu', () => {
  const storyPath = 'Core/DropdownMenu';
  const tests = [
    'Basic',
    'Submenu',
    'With Badges',
    'With Icons',
    'With Content',
    'With Separator',
    'With Sublabels',
  ];

  tests.forEach((testName) => {
    const id = `${storyPath
      .replace('/', '-')
      .toLowerCase()}--${testName.replaceAll(' ', '-').toLowerCase()}`;

    it(testName, () => {
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(`${testName} (Closed)`);
      cy.get('.iui-button').click();

      if (testName === 'Submenu') {
        cy.get('.iui-menu-item').last().trigger('mouseenter');
      }

      cy.compareSnapshot(`${testName} (Open)`);
    });
  });
});
