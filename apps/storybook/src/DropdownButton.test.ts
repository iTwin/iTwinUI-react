describe('DropdownButton', () => {
  const storyPath = 'Buttons/DropdownButton';
  const tests = ['Basic'];

  tests.forEach((testName) => {
    const id = `${storyPath
      .replace('/', '-')
      .toLowerCase()}--${testName.replaceAll(' ', '-').toLowerCase()}`;

    it(testName, () => {
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(`${testName} (Closed)`);
      cy.get('.iui-button').click();
      cy.compareSnapshot(`${testName} (Open)`);
    });
  });
});
