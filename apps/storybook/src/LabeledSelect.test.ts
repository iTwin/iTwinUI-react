describe('LabeledSelect', () => {
  const storyPath = 'Input/LabeledSelect';
  const tests = [
    'Basic',
    'Negative',
    'Positive',
    'Warning',
    'With Custom Icon',
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
