describe('Select', () => {
  const storyPath = 'Input/Select';
  const tests = [
    'Basic',
    'Custom',
    'Disabled',
    'Disabled With Selected Value',
    'Many Items',
    'Sublabels',
    'Truncate Middle Text',
    'With Icons',
    'With Selected Value',
  ];

  tests.forEach((testName) => {
    const id = `${storyPath
      .replace('/', '-')
      .toLowerCase()}--${testName.replaceAll(' ', '-').toLowerCase()}`;

    it(testName, () => {
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(`${testName} (Closed)`);
      cy.get('.iui-select-button').click();
      cy.compareSnapshot(`${testName} (Open)`);
    });
  });
});
