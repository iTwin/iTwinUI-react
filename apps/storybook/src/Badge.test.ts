describe('Badge', () => {
  const storyPath = 'Core/Badge';
  const tests = ['Basic', 'Long Label', 'Statuses'];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(testName);
    });
  });
});
