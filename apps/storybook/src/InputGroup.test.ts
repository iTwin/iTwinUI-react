describe('InputGroup', () => {
  const storyPath = 'Input/InputGroup';
  const tests = ['Checkbox Group', 'Radio Group', 'Toggle Group'];

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
