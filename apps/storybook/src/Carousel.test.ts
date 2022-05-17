describe('Carousel', () => {
  const storyPath = 'Core/Carousel';
  const tests = ['Basic', 'Controlled'];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.wait(1000); // wait for dots list to finish scrolling
      cy.compareSnapshot(testName);
    });
  });
});
