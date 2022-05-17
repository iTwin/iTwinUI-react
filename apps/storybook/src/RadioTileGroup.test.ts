describe('RadioTileGroup', () => {
  const storyPath = 'Input/RadioTileGroup';
  const tests = ['Colored', 'Monochrome'];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(testName);
    });
  });
});
