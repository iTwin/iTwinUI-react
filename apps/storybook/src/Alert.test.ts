describe('Alert', () => {
  const storyPath = 'Core/Alert';
  const tests = [
    'Positive',
    'Negative',
    'Warning',
    'Informational',
    'Empty',
    'Sticky',
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
