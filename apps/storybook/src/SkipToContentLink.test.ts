describe('SkipToContentLink', () => {
  const storyPath = 'Core/SkipToContentLink';
  const tests = ['Basic', 'Custom Text'];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.get('.iui-skip-to-content-link').focus();
      cy.compareSnapshot(testName);
    });
  });
});
