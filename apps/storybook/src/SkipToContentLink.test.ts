describe('SkipToContentLink', () => {
  const storyPath = 'Core/SkipToContentLink';
  const tests = ['Basic', 'Custom Text'];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.get('.iui-skip-to-content-link').focus();
      cy.compareSnapshot(testName);
    });
  });
});
