describe('Carousel', () => {
  const storyPath = 'Core/Carousel';
  const tests = ['Basic', 'Controlled'];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.wait(1000); // wait for dots list to finish scrolling
      cy.compareSnapshot(testName);
    });
  });
});
