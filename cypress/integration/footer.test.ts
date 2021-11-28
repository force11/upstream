/// <reference types="cypress" />

describe("Footer", () => {
  it("upstream", () => {
    cy.visit("/");
    cy.get("[data-cy=upstream-column]").contains("Upstream");
  });
});

export {};
