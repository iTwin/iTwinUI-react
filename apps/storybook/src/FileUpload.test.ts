describe('FileUpload', () => {
  const storyPath = 'Core/FileUpload';
  const tests = ['Default', 'Wrapping Input'];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(testName);
    });
  });
});
