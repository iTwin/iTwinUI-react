describe('SplitButton', () => {
  const storyPath = 'Buttons/SplitButton';
  const tests = ['Basic'];

  tests.forEach((testName) => {
    const id = `${storyPath
      .replace('/', '-')
      .toLowerCase()}--${testName.replaceAll(' ', '-').toLowerCase()}`;

    it(testName, () => {
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(`${testName} (Closed)`);
      cy.get('.iui-button').last().click();
      cy.compareSnapshot(`${testName} (Open)`);
    });
  });
});
