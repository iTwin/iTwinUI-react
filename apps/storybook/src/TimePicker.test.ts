describe('TimePicker', () => {
  const storyPath = 'Core/TimePicker';
  const tests = ['Basic'];

  tests.forEach((testName) => {
    const id = `${storyPath
      .replace('/', '-')
      .toLowerCase()}--${testName.replaceAll(' ', '-').toLowerCase()}`;

    it(testName, () => {
      cy.visit('iframe', { qs: { id } });
      cy.get('.iui-button').last().click();
      cy.get('.iui-input-container').hide();
      cy.compareSnapshot(testName);
    });
  });
});
