describe('ComboBox', () => {
  const storyPath = 'Core/ComboBox';
  const tests = [
    'Basic',
    'Controlled',
    'Custom Renderer',
    'With Custom Message Icon',
    'With Label',
    'With Message',
    'With Status',
  ];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(`${testName} (Closed)`);
      cy.get('input').focus();
      cy.compareSnapshot(`${testName} (Open)`);
    });
  });
});
