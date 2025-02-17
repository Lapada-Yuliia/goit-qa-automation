// npm install cypress --save-dev
// npx cypress open
// npx cypress run -b chrome --headed

// "[data-cy = ""]" - add custom selectors to the code

// describe("Наш перший блок тестів", () => {
//   beforeEach(() => {
//     cy.visit("https://www.edu.goit.global/account/login");
//   });

//   it("Тест відвідування сайту LMS", () => {
//     cy.get("#user_email").as("email");

//     cy.get("@email").type("user888@gmail.com");

//     cy.get("#user_password").as("pass");

//     cy.get("@pass").type("1234567890");

//     cy.get('[type = "submit"]').click();

//     cy.contains("Log in").click();

//     cy.get('[id="go-to-the-course-homepage-widget"]')
//       .scrollIntoView()
//       .should("be.visible");
//   });

//   it("Test practice 1 - check the button properties", () => {
//     cy.get('[type = "submit"]').should("have.text", "Log in");

//     cy.get('[type = "submit"]').should(
//       "have.css",
//       "background-color",
//       "rgb(255, 107, 10)"
//     );
//   });

//   it("Locators with use of indices", () => {
//     cy.get("input").eq(0).should("be.visible");

//     cy.get("input").eq(1).should("be.visible");
//   });
// });

// describe("login test", () => {
//   it("admin login", () => {
//     cy.visit("https://www.edu.goit.global/account/login");

//     cy.signIn("user888@gmail.com", "1234567890");
//   });

//   it("user login", () => {
//     cy.visit("https://www.edu.goit.global/account/login");

//     cy.signIn("nadia.tsomko.98@gmail.com", "Nadia_Tsomko78");
//   });

//   it("manager login", () => {
//     cy.visit("https://www.edu.goit.global/account/login");

//     cy.signIn("mrdusty@duniakeliling.com", "mrdusty@duniakeliling.com");
//   });
// });
