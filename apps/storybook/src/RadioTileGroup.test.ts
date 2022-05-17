describe('RadioTileGroup', () => {
  const storyPath = 'Input/RadioTileGroup';
  const tests = ['Colored', 'Monochrome'];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(testName);
    });
  });
});
