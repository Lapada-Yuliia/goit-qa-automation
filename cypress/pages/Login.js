// export class Login {
//   navigate() {
//     cy.visit("https://www.edu.goit.global/account/login");
//   }

//   validateLoginTitle() {
//     cy.get(".next-10stgr7 > .next-c1vj7d").should("be.visible");
//     cy.get(".next-10stgr7 > .next-c1vj7d").should("have.text", "Login");
//   }

//   validateInputs() {
//     cy.get("#user_email").should("be.visible");
//     cy.get("#user_password").should("be.visible");
//   }

//   validateButton() {
//     cy.get(".eckniwg2").should("be.visible");
//   }

//   validateButton(name) {
//     cy.contains(name).should("be.visible");
//   }

//   validatePasswordLink() {
//     cy.get(".next-1f1fv1i > .next-1qrvie4").should("be.visible");
//     cy.get(".next-1f1fv1i > .next-1qrvie4").should(
//       "have.text",
//       "I can't remember the password"
//     );
//   }
// }

// HW3

// export class Login {
//   navigate() {
//     cy.visit("https://www.edu.goit.global/account/login");
//   }

//   typeEmail(email) {
//     cy.get("#user_email").type(email);
//   }

//   typePassword(password) {
//     cy.get("#user_password").type(password);
//   }

//   clickSubmit() {
//     cy.get("[type='submit']").click();
//   }
// }

// HW3
