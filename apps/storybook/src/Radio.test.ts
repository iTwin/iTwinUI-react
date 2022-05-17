describe('Radio', () => {
  const storyPath = 'Input/Radio';
  const tests = ['Basic', 'Disabled', 'Negative', 'Positive', 'Warning'];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(testName);
    });
  });
});
