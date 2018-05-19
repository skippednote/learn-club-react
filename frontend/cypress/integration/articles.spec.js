describe('Articles', () => {
  context('ArticleList', () => {
    beforeEach(() => {
      const url =
        'http://lcr.lndo.site/jsonapi/node/article?_format=json&fields[node--article]=title,body';
      cy.server();
      cy.route('GET', url, 'fixture:articles').as('articles');
      cy.visit('/articles');
      cy.wait('@articles');
    });

    it('renders the container for the list', () => {
      cy.get('.articlelist').should('exist');
    });

    it('renders all the articles', () => {
      cy.get('.articlelist li').should('have.length', 1);
    });
  });
});
