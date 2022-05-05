describe('SkipToContentLink', () => {
  const storyPath = 'Core/SkipToContentLink';
  const tests = ['Basic', 'Custom Text'];

  tests.forEach((testName) => {
    const id = `${storyPath
      .replace('/', '-')
      .toLowerCase()}--${testName.replaceAll(' ', '-').toLowerCase()}`;

    it(testName, () => {
      cy.visit('iframe', { qs: { id } });
      cy.get('.iui-skip-to-content-link').focus();
      cy.compareSnapshot(testName);
    });
  });
});
