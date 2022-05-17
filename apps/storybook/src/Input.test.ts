describe('Input', () => {
  const storyPath = 'Input/Input';
  const tests = ['Basic', 'Disabled', 'Small'];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(testName);
    });
  });
});
