describe('Tree', () => {
  const storyPath = 'Core/Tree';
  const tests = ['Basic', 'Full', 'Customized Expander', 'Async Loading'];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(testName);
    });
  });
});
