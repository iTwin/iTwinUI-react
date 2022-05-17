describe('TimePicker', () => {
  const storyPath = 'Core/TimePicker';
  const tests = ['Basic'];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.get('.iui-button').last().click();
      cy.get('.iui-input-container').hide();
      cy.compareSnapshot(testName);
    });
  });
});
