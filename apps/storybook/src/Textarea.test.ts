describe('Textarea', () => {
  const storyPath = 'Input/Textarea';
  const tests = ['Basic', 'Disabled'];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(testName);
    });
  });
});
