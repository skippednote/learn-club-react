describe('Articles', () => {
  context('ArticleList', () => {
    beforeEach(() => {
      const url =
        'http://lcr.lndo.site/jsonapi/node/article/somerandom_912312_string?_format=json&fields[node--article]=title,body';
      cy.server();
      cy.route('GET', url, 'fixture:article').as('article');
      cy.visit('/articles/somerandom_912312_string');
      cy.wait('@article');
    });

    it('renders the container for the list', () => {
      cy.get('.articleItem').should('exist');
    });

    it('renders article fields', () => {
      cy.get('.title').should('have.length', 1);
      cy.get('.body').should('have.length', 1);
    });
  });
});
