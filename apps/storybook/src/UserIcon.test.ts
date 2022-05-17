describe('UserIcon', () => {
  const storyPath = 'Core/UserIcon';
  const tests = [
    'Basic',
    'Sizes',
    'Statuses',
    'With Image',
    'Custom Status Translation',
  ];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(testName);
    });
  });
});
