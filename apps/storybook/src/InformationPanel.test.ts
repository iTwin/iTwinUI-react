describe('InformationPanel', () => {
  const storyPath = 'Core/InformationPanel';
  const tests = ['Basic', 'Custom Actions', 'Custom Width', 'Horizontal'];

  tests.forEach((testName) => {
    const id = `${storyPath
      .replace('/', '-')
      .toLowerCase()}--${testName.replaceAll(' ', '-').toLowerCase()}`;

    it(testName, () => {
      cy.visit('iframe', { qs: { id } });
      cy.get('.iui-button').first().click();
      cy.compareSnapshot(testName);
    });
  });
});
