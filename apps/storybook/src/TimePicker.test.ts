describe('TimePicker', () => {
  const storyPath = 'Core/TimePicker';
  const tests = ['Basic'];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.get('.iui-button').last().click();
      cy.get('.iui-input-container').hide();
      cy.compareSnapshot(testName);
    });
  });
});
