describe('SideNavigation', () => {
  const storyPath = 'Core/SideNavigation';
  const tests = ['Basic', 'Active Item', 'Submenu'];

  tests.forEach((testName) => {
    const id = `${storyPath
      .replace('/', '-')
      .toLowerCase()}--${testName.replaceAll(' ', '-').toLowerCase()}`;

    it(testName, () => {
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(testName);
    });
  });
});
