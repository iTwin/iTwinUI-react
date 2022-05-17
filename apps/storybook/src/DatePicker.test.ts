describe('DatePicker', () => {
  const storyPath = 'Core/DatePicker';
  const tests = ['Basic', 'Localized', 'With Time', 'With Year'];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.get('#picker-button + span').hide();
      cy.get('#picker-button').click();
      cy.compareSnapshot(testName);
    });
  });
});
