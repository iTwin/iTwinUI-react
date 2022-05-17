describe('Tile', () => {
  const storyPath = 'Core/Tile';
  const tests = [
    'Basic',
    'All Props',
    'Actionable',
    'Condensed',
    'Folder',
    'With User Icon',
  ];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(testName);
    });
  });
});
