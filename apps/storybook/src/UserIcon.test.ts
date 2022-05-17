describe('UserIcon', () => {
  const storyPath = 'Core/UserIcon';
  const tests = [
    'Basic',
    'Sizes',
    'Statuses',
    'With Image',
    'Custom Status Translation',
  ];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(testName);
    });
  });
});
