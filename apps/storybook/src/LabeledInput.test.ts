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
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(testName);
    });
  });
});
