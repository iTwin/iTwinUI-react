describe('Text', () => {
  const storyPath = 'Typography/Text';
  const tests = ['Basic', 'Polymorphic', 'Skeleton'];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(testName);
    });
  });
});
