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
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(testName);
    });
  });
});
