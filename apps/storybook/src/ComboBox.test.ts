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
    const id = `${storyPath
      .replace('/', '-')
      .toLowerCase()}--${testName.replaceAll(' ', '-').toLowerCase()}`;

    it(testName, () => {
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(`${testName} (Closed)`);
      cy.get('input').focus();
      cy.compareSnapshot(`${testName} (Open)`);
    });
  });
});
