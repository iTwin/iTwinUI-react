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
    const id = `${storyPath
      .replace('/', '-')
      .toLowerCase()}--${testName.replaceAll(' ', '-').toLowerCase()}`;

    it(testName, () => {
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(testName);
    });
  });
});
