describe('IdeasButton', () => {
  const storyPath = 'Buttons/IdeasButton';
  const tests = ['Ideas', 'Localized Ideas'];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(testName);
    });
  });
});
