describe('SplitButton', () => {
  const storyPath = 'Buttons/SplitButton';
  const tests = ['Basic'];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(`${testName} (Closed)`);
      cy.get('.iui-button').last().click();
      cy.compareSnapshot(`${testName} (Open)`);
    });
  });
});
