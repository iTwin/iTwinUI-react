describe('ErrorPage', () => {
  const storyPath = 'Core/ErrorPage';
  const tests = [
    'Bad Gateway',
    'Page Not Found',
    'Internal Server Error',
    'Service Unavailable',
    'Forbidden',
    'Unauthorized',
    'Custom Html Message',
    'Generic',
    'Translated Messages',
    'Without Message Or Buttons',
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
