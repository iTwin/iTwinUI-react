describe('Button', () => {
  const storyPath = 'Buttons/Button';
  const tests = [
    'Default',
    'High Visibility',
    'With Icon',
    'Call To Action',
    'As Link',
  ];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(testName);
    });
  });
});
