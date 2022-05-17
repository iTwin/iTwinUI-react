describe('Label', () => {
  const storyPath = 'Typography/Label';
  const tests = ['Basic', 'Inline', 'Polymorphic'];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(testName);
    });
  });
});
