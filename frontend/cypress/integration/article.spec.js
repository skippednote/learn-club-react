describe('Articles', () => {
  context('ArticleList', () => {
    beforeEach(() => {
      const url =
        'http://lcr.lndo.site/jsonapi/node/article/e4e23b35?_format=json&fields[node--article]=title,body,field_tags,field_image&include=field_tags,field_image&fields[taxonomy_term--tags]=name&fields[file--file]=uri';
      cy.server();
      cy.route('GET', url, 'fixture:article').as('article');
      cy.visit('/articles/e4e23b35');
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
