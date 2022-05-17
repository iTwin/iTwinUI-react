describe('InformationPanel', () => {
  const storyPath = 'Core/InformationPanel';
  const tests = ['Basic', 'Custom Actions', 'Custom Width', 'Horizontal'];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.get('.iui-button').first().click();
      cy.compareSnapshot(testName);
    });
  });
});
