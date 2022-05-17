describe('FileUpload', () => {
  const storyPath = 'Core/FileUpload';
  const tests = ['Default', 'Wrapping Input'];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(testName);
    });
  });
});
