describe('UserIconGroup', () => {
  const storyPath = 'Core/UserIconGroup';
  const tests = [
    'Basic',
    'Animated',
    'Many Icons',
    'Non Stacked',
    'With Tooltip',
  ];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });

      if (testName.includes('Tooltip')) {
        cy.get('.iui-user-icon-count').trigger('mouseenter'); // trigger tooltip
      }

      cy.compareSnapshot(testName);
    });
  });
});
