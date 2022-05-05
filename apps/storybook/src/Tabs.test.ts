describe('Tabs', () => {
  const storyPath = 'Core/Tabs';
  const tests = [
    'Default Tabs',
    'Borderless Tabs',
    'Pill Tabs',
    'Sublabels And Icons',
    'Vertical',
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
