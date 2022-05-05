describe('Checkbox', () => {
  const storyPath = 'Input/Checkbox';
  const tests = [
    'Basic',
    'Disabled',
    'Indeterminate',
    'Loading',
    'Negative',
    'Positive',
    'Warning',
    'Visibility',
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
