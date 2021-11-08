/// <reference types="cypress" />

describe('Navbar', () => {
  it('link', () => {
    cy.visit('/')
    cy.get('[data-cy=navbarLink]', { timeout: 30000 }).contains('Front Matter')
  })
})

export {}
