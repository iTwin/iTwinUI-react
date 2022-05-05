describe('DatePicker', () => {
  const storyPath = 'Core/DatePicker';
  const tests = ['Basic', 'Localized', 'With Time', 'With Year'];

  tests.forEach((testName) => {
    const id = `${storyPath
      .replace('/', '-')
      .toLowerCase()}--${testName.replaceAll(' ', '-').toLowerCase()}`;

    it(testName, () => {
      cy.visit('iframe', { qs: { id } });
      cy.get('#picker-button + span').hide();
      cy.get('#picker-button').click();
      cy.compareSnapshot(testName);
    });
  });
});
