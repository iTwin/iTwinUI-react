describe('Footer', () => {
  const storyPath = 'Core/Footer';
  const tests = [
    'Basic',
    'Bottom Fixed',
    'Appended Custom Elements',
    'Customized Default And Custom Elements',
    'Only Custom Elements',
  ];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(testName);
    });
  });
});
