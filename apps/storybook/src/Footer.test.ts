describe('Footer', () => {
  const storyPath = 'Core/Footer';
  const tests = [
    'Basic',
    'Bottom Fixed',
    'Appended Custom Elements',
    'Customized Default And Custom Elements',
    'Only Custom Elements',
  ];

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
