describe('Headline', () => {
  const storyPath = 'Typography/Headline';
  const tests = ['Base', 'Muted'];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(testName);
    });
  });
});
