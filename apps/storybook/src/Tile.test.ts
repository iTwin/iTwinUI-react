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
    const id = `${storyPath
      .replace('/', '-')
      .toLowerCase()}--${testName.replaceAll(' ', '-').toLowerCase()}`;

    it(testName, () => {
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(testName);
    });
  });
});
