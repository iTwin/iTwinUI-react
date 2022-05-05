describe('TagContainer', () => {
  const storyPath = 'Core/TagContainer';
  const tests = [
    'Basic Tags Container',
    'Default Tags Container',
    'Scrollable Default Tags Container',
    'Truncated Basic Tags Container',
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
