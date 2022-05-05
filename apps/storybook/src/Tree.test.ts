describe('Tree', () => {
  const storyPath = 'Core/Tree';
  const tests = ['Basic', 'Full', 'Customized Expander', 'Async Loading'];

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
