describe('ExpandableBlock', () => {
  const storyPath = 'Core/ExpandableBlock';
  const tests = [
    'Basic',
    'Borderless',
    'Accordion',
    'Small',
    'Status Icon',
    'With Caption',
  ];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(`${testName} (Closed)`);
      cy.get('.iui-header').first().click();
      cy.compareSnapshot(`${testName} (Open)`);
    });
  });
});
