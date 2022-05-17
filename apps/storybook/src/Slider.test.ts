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
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(testName);
    });
  });
});
