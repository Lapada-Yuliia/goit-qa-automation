// describe("httpbin tests", () => {
//   it("response code should be 200", () => {
//     cy.request("https://httpbin.org").then((response) => {
//       const status = response.status;

//       assert.equal(200, status);
//     });
//   });
// });

// describe("httpbin tests", () => {
//   const request = {
//     url: "https://httpbin.org/non-existing-url",
//     failOnStatusCode: false,
//   };

//   it("response code should be 200", () => {
//     cy.request(request).then((response) => {
//       const status = response.status;

//       assert.equal(200, status);
//     });
//   });
// });

// describe("httpbin tests", () => {
//   const request = {
//     method: "POST",
//     url: "https://httpbin.org/post",
//     failOnStatusCode: false,
//   };

//   it("response code should be 200", () => {
//     cy.request(request).then((response) => {
//       assert.equal(200, response.status);
//     });
//   });
// });

// describe("httpbin tests", () => {
//   const request = {
//     method: "GET",
//     url: "https://httpbin.org/post",
//     failOnStatusCode: false,
//   };

//   it("response code should be 405", () => {
//     cy.request(request).then((response) => {
//       assert.equal(405, response.status);
//     });
//   });
// });

// describe("httpbin tests", () => {
//   const request = {
//     url: "https://httpbin.org/get",
//     qs: {
//       key: "value",
//     },
//     failOnStatusCode: false,
//   };

//   it("response value should be value", () => {
//     cy.request(request).then((response) => {
//       assert.equal("value", response.body.args.key);
//     });
//   });
// });

// describe("httpbin tests", () => {
//   const bodyData = {
//     bodyKey: "bodyValue",
//   };

//   const request = {
//     method: "POST",
//     url: "https://httpbin.org/post",
//     body: bodyData,
//     failOnStatusCode: false,
//   };

// const body = {
//   bodyKey: "bodyValue",
// };

// const request = {
//   method: "POST",
//   url: "https://httpbin.org/post",
//   body,
//   failOnStatusCode: false,
// };

//   it("complex post test", () => {
//     cy.request(request).then((response) => {
//       assert.equal(200, response.status);
//       assert.notStrictEqual(bodyData, response.body.data);
//     });
//   });
// });

// describe("httpbin tests", () => {
//   const request = {
//     method: "GET",
//     url: "https://httpbin.org/headers",
//     headers: {
//       customHeader: "customValue",
//     },
//     failOnStatusCode: false,
//   };

//   it("test that header set correctly", () => {
//     cy.request(request).then((response) => {
//       assert.equal(200, response.status);
//       assert.equal("customValue", response.requestHeaders.customHeader);
//     });
//   });
// });

// describe("httpbin tests", () => {
//   const request = {
//     method: "GET",
//     url: "https://httpbin.org/headers",
//     headers: {
//       "user-agent": "My test user-agent",
//     },
//     failOnStatusCode: false,
//   };

//   it("test that user-agent set correctly", () => {
//     cy.request(request).then((response) => {
//       assert.equal(200, response.status);
//       assert.equal("My test user-agent", response.requestHeaders["user-agent"]);
//     });
//   });
// });

// describe("httpbin tests", () => {
//   const request = {
//     method: "GET",
//     url: "https://httpbin.org/headers",
//     headers: {
//       Cookie: "cookieName=cookieValue",
//     },
//     failOnStatusCode: false,
//   };

//   it("test send cookie", () => {
//     cy.request(request).then((response) => {
//       assert.equal(200, response.status);
//       assert.equal("cookieName=cookieValue", response.requestHeaders["Cookie"]);
//     });
//   });
// });

// Examples - not for testing.
// describe("tests for response", () => {
//   it("test check response status", () => {
//     cy.request(request).then((response) => {
//       assert.equal(200, response.status);
//     });
//   });

//   it("test complex response body", () => {
//     cy.request(request).then((response) => {
//       const expectedBody = {
//         key: "value",
//       };

//       assert.equal(expectedBody, response.body);
//     });
//   });

//   it("test single response body key", () => {
//     cy.request(request).then((response) => {
//       assert.equal("someFieldValue", response.body["someFieldName"]);
//     });
//   });

//   it("test header", () => {
//     cy.request(request).then((response) => {
//       assert.equal("key=value", response.headers["Set-Cookie"]);
//     });
//   });

//   it("test duration", () => {
//     cy.request(request).then((response) => {
//       assert.isTrue(response.duration <= 150);
//     });
//   });
// });

// 3 variants (DevTools console, Cypress console or Debug mode) for debugging & console.
// describe("tests for response", () => {
//   it("response code should be 200", () => {
//     const request = {
//       method: "GET",
//       url: "https://reqres.in/api/users/2",
//     };

//     cy.request(request).then((resp) => {
//       console.log(resp);
//       assert.equal("janet.weaver@reqres.in", resp.body.data.email);
//     });
//   });

//   it("response code should be 200", () => {
//     const request = {
//       method: "GET",
//       url: "https://reqres.in/api/users/2",
//     };

//     cy.request(request).then((resp) => {
//       cy.log(resp.body.data.email);
//       assert.equal("janet.weaver@reqres.in", resp.body.data.email);
//     });
//   });

//   it("response code should be 200", () => {
//     const request = {
//       method: "GET",
//       url: "https://reqres.in/api/users/2",
//     };

//     cy.request(request).then((resp) => {
//       debugger;

//       const body = resp.body;

//       const email = body.data.email;

//       assert.equal("janet.weaver@reqres.in", email);
//     });
//   });
// });

// describe("httpbin tests", () => {
//   it("test random ids", () => {
//     for (let i = 0; i < 10; i++) {
//       const randomId = getRandomInt(10000000);

//       const request = {
//         url: "https://httpbin.org/headers",
//         id: randomId,
//       };

//       cy.request(request).then((response) => {
//         assert.isTrue(response.status == 200);
//       });
//     }
//   });
// });

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// describe("https://reqres.in/ test", () => {
//   it("Create user", () => {
//     const request = {
//       method: "POST",
//       url: "https://reqres.in/api/users",
//       body: {
//         name: "Mykola",
//         job: "Teacher",
//       },
//     };

//     cy.request(request).then((response) => {
//       console.log(response);

//       debugger;

//       assert.equal(201, response.status);

//       assert.equal("Mykola", response.body.name);

//       assert.isTrue(response.duration <= 2000);

//       cy.log(response);
//     });
//   });
// });

// Stub test.
// describe("https://reqres.in/ test", () => {
//   it("response code should be 200", () => {
//     const request = {
//       method: "GET",
//       url: "https://reqres.in/api/users/2",
//     };
//     cy.request(request).then((response) => {
//       assert.equal("janet.weaver@reqres.in", response.body.data.email);
//     });
//   });

//   it("stub test", () => {
//     cy.intercept({
//       method: "GET",
//       url: "https://reqres.in/api/users/2",
//     }).as("getUsers");
//   });
// });
