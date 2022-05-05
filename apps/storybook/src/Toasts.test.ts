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
    const id = `${storyPath
      .replace('/', '-')
      .toLowerCase()}--${testName.replaceAll(' ', '-').toLowerCase()}`;

    it(testName, () => {
      cy.visit('iframe', { qs: { id } });
      cy.get('.iui-button').first().click();
      cy.compareSnapshot(testName);
    });
  });
});
