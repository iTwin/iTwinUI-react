describe('ProgressRadial', () => {
  const storyPath = 'ProgressIndicators/ProgressRadial';
  const tests = [
    'Determinate',
    'Determinate With Content',
    'Indeterminate',
    'Negative',
    'Positive',
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
