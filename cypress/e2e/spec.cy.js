describe('My First Test', () => {
  it('Visits the Netflix', () => {
    cy.visit('http://localhost:3001/');
    cy.get('input').should('have.value', '');
  });

  it('should find zootopia', () => {
    cy.get('input[id="search"]')
      .type('zootopia')
      .should('have.value', 'zootopia');
    cy.contains('search', { matchCase: false }).click();

    cy.get(
      'ul[class="movies-list"]>li>div>div[class="movie-card__body"]>div>h2'
    ).contains('zootopia', { matchCase: false });
  });

  it('should open details', () => {
    cy.get('ul[class="movies-list"]>li>div a').click();

    cy.get('h1[class="movie-description__title"]').should(
      'have.text',
      'Zootopia'
    );
  });
});
