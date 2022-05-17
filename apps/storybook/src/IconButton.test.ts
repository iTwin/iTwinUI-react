describe('IconButton', () => {
  const storyPath = 'Buttons/IconButton';
  const tests = [
    'Add',
    'Borderless',
    'High Visibility Add',
    'Small Active Add',
  ];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(testName);
    });
  });
});
