/// <reference types="cypress" />

describe("Header", () => {
  const sizes = ["iphone-8", "ipad-2", [1024, 768], "macbook-13", "macbook-16"];

  sizes.forEach((size) => {
    it(`logo on ${size} screen`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
      } else {
        cy.viewport(size);
      }

      cy.visit("/");
      cy.get("[data-cy=sitename]").contains("Upstream");
    });

    it(`menu on ${size} screen`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
      } else {
        cy.viewport(size);
      }

      cy.visit("/");
      if (size === "iphone-8" || size === "ipad-2") {
        cy.get("[data-cy=menu-icon]").should("be.visible");
      } else {
        cy.get("[data-cy=menu-icon]").should("not.be.visible");
      }
    });
  });
});
export {};
