describe('TagContainer', () => {
  const storyPath = 'Core/TagContainer';
  const tests = [
    'Basic Tags Container',
    'Default Tags Container',
    'Scrollable Default Tags Container',
    'Truncated Basic Tags Container',
  ];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(testName);
    });
  });
});
