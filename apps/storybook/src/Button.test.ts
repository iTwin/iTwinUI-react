describe('Button', () => {
  const storyPath = 'Buttons/Button';
  const tests = [
    'Default',
    'High Visibility',
    'With Icon',
    'Call To Action',
    'As Link',
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
