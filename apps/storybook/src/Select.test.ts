describe('Select', () => {
  const storyPath = 'Input/Select';
  const tests = [
    'Basic',
    'Custom',
    'Disabled',
    'Disabled With Selected Value',
    'Many Items',
    'Sublabels',
    'Truncate Middle Text',
    'With Icons',
    'With Selected Value',
  ];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });

      if (testName.includes('Disabled')) {
        cy.compareSnapshot(testName);
        return;
      }

      if (testName.includes('With Selected Value')) {
        cy.compareSnapshot(`${testName} (Open)`);
        cy.get('.iui-select-button').click();
        cy.compareSnapshot(`${testName} (Closed)`);
        return;
      }

      cy.compareSnapshot(`${testName} (Closed)`);
      cy.get('.iui-select-button').click();
      cy.compareSnapshot(`${testName} (Open)`);

      if (testName.includes('Custom')) {
        cy.get('.iui-menu-item').first().click();
        cy.compareSnapshot(`${testName} (Closed With Value)`);
      }
    });
  });
});
