describe('DatePicker', () => {
  const storyPath = 'Core/DatePicker';
  const tests = ['Basic', 'Localized', 'With Time', 'With Year'];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.get('#picker-button + span').hide();
      cy.get('#picker-button').click();
      cy.compareSnapshot(testName);
    });
  });
});
