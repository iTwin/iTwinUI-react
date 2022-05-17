describe('ColorPicker', () => {
  const storyPath = 'Core/ColorPicker';
  const tests = ['Basic', 'Advanced', 'With Alpha'];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.get('.iui-button').first().click();
      cy.compareSnapshot(testName);
    });
  });
});
