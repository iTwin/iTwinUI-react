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
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(testName);
    });
  });
});
