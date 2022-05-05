describe('LabeledInput', () => {
  const storyPath = 'Input/LabeledInput';
  const tests = [
    'Basic',
    'Disabled',
    'Inline',
    'Hybrid Layout',
    'Hybrid Layout With Button',
    'Negative',
    'Positive',
    'Warning',
    'With Custom Icon',
    'With Message',
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
