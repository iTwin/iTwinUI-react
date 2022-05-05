describe('RadioTileGroup', () => {
  const storyPath = 'Input/RadioTileGroup';
  const tests = ['Colored', 'Monochrome'];

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
