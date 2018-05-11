describe('Home', () => {
  beforeEach(function() {
    cy.visit('/')
  })

  it('render the heading', () => {
    cy.get('h1').should('contain', 'Learn Club - React')
  })

  it('increases the count on clicking increment', () => {
    cy.get('.increment').click()
    cy.get('.count').contains('1')
  })

  it('decreses the count on clicking decrement', () => {
    cy.get('.decrement').click()
    cy.get('.count').contains('1')
  })
})
