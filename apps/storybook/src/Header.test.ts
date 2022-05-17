describe('Header', () => {
  const storyPath = 'Core/Header';
  const tests = ['Basic', 'Center Content', 'Full'];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(testName);
    });
  });
});
