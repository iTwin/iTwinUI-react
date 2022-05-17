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
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(testName);
    });
  });
});
