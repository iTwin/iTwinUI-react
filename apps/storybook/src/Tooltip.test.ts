describe('Tooltip', () => {
  const storyPath = 'Core/Tooltip';
  const tests = ['Bottom', 'Left', 'Right', 'Top'];

  tests.forEach((testName) => {
    const id = `${storyPath
      .replace('/', '-')
      .toLowerCase()}--${testName.replaceAll(' ', '-').toLowerCase()}`;

    it(testName, () => {
      cy.visit('iframe', { qs: { id } });
      cy.get('#tooltip-target').trigger('mouseenter');
      cy.compareSnapshot(testName);
    });
  });
});
