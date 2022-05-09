describe('Carousel', () => {
  const storyPath = 'Core/Carousel';
  const tests = ['Basic', 'Controlled'];

  tests.forEach((testName) => {
    const id = `${storyPath
      .replace('/', '-')
      .toLowerCase()}--${testName.replaceAll(' ', '-').toLowerCase()}`;

    it(testName, () => {
      cy.visit('iframe', { qs: { id } });
      cy.wait(1000); // wait for dots list to finish scrolling
      cy.compareSnapshot(testName);
    });
  });
});
