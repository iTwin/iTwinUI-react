describe('Slider', () => {
  const storyPath = 'Input/Slider';
  const tests = [
    'Basic',
    'Custom Tick No Tooltip',
    'Custom Tooltip',
    'Decimal Increment',
    'Disabled',
    'Multi Thumbs Allow Crossing',
    'Range',
    'With Custom Thumb',
  ];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(testName);
    });
  });
});
