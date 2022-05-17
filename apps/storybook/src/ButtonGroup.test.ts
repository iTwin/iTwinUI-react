describe('ButtonGroup', () => {
  const storyPath = 'Buttons/ButtonGroup';
  const tests = [
    'With Icons',
    'Overflow',
    'Vertical',
    'Vertical Overflow',
    'Input Button Combo',
  ];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });

      if (testName.includes('Overflow')) {
        cy.get('small').hide();
        cy.viewport(800, 600);
      }

      cy.compareSnapshot(testName);
    });
  });
});
