describe('ToggleSwitch', () => {
  const storyPath = 'Input/ToggleSwitch';
  const tests = [
    'Basic',
    'Disabled Checked',
    'Disabled Unchecked',
    'Label Left',
    'Label Right',
    'With Icon',
  ];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(testName);
    });
  });
});
