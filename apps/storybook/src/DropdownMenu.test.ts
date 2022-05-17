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
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(`${testName} (Closed)`);
      cy.get('.iui-button').click();

      if (testName === 'Submenu') {
        cy.get('.iui-menu-item').last().trigger('mouseenter');
      }

      cy.compareSnapshot(`${testName} (Open)`);
    });
  });
});
