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
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(testName);
    });
  });
});
