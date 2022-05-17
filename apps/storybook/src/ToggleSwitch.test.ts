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
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(testName);
    });
  });
});
