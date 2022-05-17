describe('Tooltip', () => {
  const storyPath = 'Core/Tooltip';
  const tests = ['Bottom', 'Left', 'Right', 'Top'];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.get('#tooltip-target').trigger('mouseenter');
      cy.compareSnapshot(testName);
    });
  });
});
