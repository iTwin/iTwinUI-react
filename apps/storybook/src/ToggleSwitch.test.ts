describe('ToggleSwitch', () => {
  const storyPath = 'Input/ToggleSwitch';
  const tests = [
    'Basic',
    'Disabled Checked',
    'Disabled Unchecked',
    'Label Left',
    'Label Right',
    'With Icon',
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
