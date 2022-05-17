describe('SideNavigation', () => {
  const storyPath = 'Core/SideNavigation';
  const tests = ['Basic', 'Active Item', 'Submenu'];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(testName);
    });
  });
});
