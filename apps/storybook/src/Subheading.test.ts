describe('Subheading', () => {
  const storyPath = 'Typography/Subheading';
  const tests = ['Base', 'Muted'];

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
