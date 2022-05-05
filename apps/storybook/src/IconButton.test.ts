describe('IconButton', () => {
  const storyPath = 'Buttons/IconButton';
  const tests = [
    'Add',
    'Borderless',
    'High Visibility Add',
    'Small Active Add',
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
