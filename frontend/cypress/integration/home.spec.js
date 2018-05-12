describe('Home', () => {
  it('render the heading', () => {
    cy.visit('/');
    cy.get('h1').should('contain', 'Learn Club - React');
  });

  context('Counter', () => {
    beforeEach(function() {
      cy.visit('/');
    });
    it('increases the count on clicking increment', () => {
      cy.get('.increment').click();
      cy.get('.count').contains('1');
    });

    it('decreses the count on clicking decrement', () => {
      cy.get('.decrement').click();
      cy.get('.count').contains('1');
    });
  });

  context('PeopleList', () => {
    beforeEach(() => {
      cy.server();
      cy.route('GET', '/people.json', 'fixture:people').as('people');
      cy.visit('/');
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
