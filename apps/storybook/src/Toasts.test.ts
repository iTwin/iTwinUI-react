describe('Toasts', () => {
  const storyPath = 'Core/Toasts';
  const tests = [
    'Anchor To Button',
    'Informational',
    'Negative',
    'Positive',
    'Warning',
    'Position Changed',
  ];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.get('.iui-button').first().click();
      cy.compareSnapshot(testName);
    });
  });
});
