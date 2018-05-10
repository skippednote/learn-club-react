describe('Homepage', () => {
  beforeEach(function() {
    cy.visit('/')
  })

  it('.should() - assert that the heading is correct', () => {
    cy.get('.App-title').should('contain', 'Welcome to React')
  })
})
