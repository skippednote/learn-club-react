describe('People', () => {
  context('PeopleList', () => {
    beforeEach(() => {
      cy.server();
      cy.route('GET', '/people.json', 'fixture:people').as('people');
      cy.visit('/people');
      cy.wait('@people');
    });

    it('renders the container for the list', () => {
      cy.get('.peoplelist').should('exist');
    });

    it('renders all the people', () => {
      cy.get('.peoplelist li').should('have.length', 3);
    });
  });
});
