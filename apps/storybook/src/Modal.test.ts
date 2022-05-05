describe('Modal', () => {
  const storyPath = 'Core/Modal';
  const tests = [
    'Basic',
    'Full Page Modal',
    'Non Dismissible Modal',
    'Outside Click And Esc Does Not Close',
  ];

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
