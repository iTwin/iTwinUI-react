describe('Radio', () => {
  const storyPath = 'Input/Radio';
  const tests = ['Basic', 'Disabled', 'Negative', 'Positive', 'Warning'];

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
