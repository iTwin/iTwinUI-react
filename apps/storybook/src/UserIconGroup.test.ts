describe('UserIconGroup', () => {
  const storyPath = 'Core/UserIconGroup';
  const tests = [
    'Basic',
    'Animated',
    'Many Icons',
    'Non Stacked',
    'With Tooltip',
  ];

  tests.forEach((testName) => {
    const id = `${storyPath
      .replace('/', '-')
      .toLowerCase()}--${testName.replaceAll(' ', '-').toLowerCase()}`;

    it(testName, () => {
      cy.visit('iframe', { qs: { id } });

      if (testName.includes('Tooltip')) {
        cy.get('.iui-user-icon-count').trigger('mouseenter'); // trigger tooltip
      }

      cy.compareSnapshot(testName);
    });
  });
});
