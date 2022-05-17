describe('Blockquote', () => {
  const storyPath = 'Typography/Blockquote';
  const tests = ['Basic', 'With Footer'];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(testName);
    });
  });
});
