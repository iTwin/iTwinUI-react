describe('Body', () => {
  const storyPath = 'Typography/Body';
  const tests = ['Basic', 'Muted', 'Skeleton'];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(testName);
    });
  });
});
