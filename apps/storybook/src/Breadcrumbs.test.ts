describe('Breadcrumbs', () => {
  const storyPath = 'Core/Breadcrumbs';
  const tests = [
    'Basic',
    'Custom Separator',
    'Folder Navigation',
    'Links',
    'Overflow',
  ];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(testName);
    });
  });
});
