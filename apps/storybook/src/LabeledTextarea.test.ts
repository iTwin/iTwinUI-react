describe('LabeledTextarea', () => {
  const storyPath = 'Input/LabeledTextarea';
  const tests = [
    'Basic',
    'Disabled',
    'Inline',
    'Negative',
    'Positive',
    'Warning',
    'With Custom Icon',
  ];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(testName);
    });
  });
});
