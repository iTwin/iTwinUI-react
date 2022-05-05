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
      cy.compareSnapshot(testName);
    });
  });
});
