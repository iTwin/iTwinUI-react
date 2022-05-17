describe('SideNavigation', () => {
  const storyPath = 'Core/SideNavigation';
  const tests = ['Basic', 'Active Item', 'Submenu'];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(testName);
    });
  });
});
