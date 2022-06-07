// import App from "@/App.vue"; // component to test
// import router from "../../../src/router"; // router config from app
// import { mountCallback } from "@cypress/vue"; // extended mount function

// describe("Vue Router - Contacts", () => {
//   // wrapper into which router is injected
//   it("go to contacts page", () => {
//     cy.visit('http://localhost:8080/');
//     cy.get("button.contacts").click();
//     cy.contains("Fuck");
//   });
// });
// https://docs.cypress.io/api/table-of-contents

describe("My First Test", () => {
  it("go to contacts page", () => {
    cy.visit("http://localhost:8080/");
    cy.get("a.contacts").click();
    cy.contains("Контакти");
    cy.get("a.prod").click();
    cy.contains("Кукурудза");
  });
});
