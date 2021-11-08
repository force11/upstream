/// <reference types="cypress" />

describe("Footer", () => {
  it("copyright", () => {
    cy.visit("/");
    cy.get("[data-cy=copyright]", { timeout: 30000 }).contains(
      "Copyright © 2021 Martin Fenner."
    );
  });
});

export {};
