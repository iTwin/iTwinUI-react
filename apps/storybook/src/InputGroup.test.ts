describe('InputGroup', () => {
  const storyPath = 'Input/InputGroup';
  const tests = ['Checkbox Group', 'Radio Group', 'Toggle Group'];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(testName);
    });
  });
});
