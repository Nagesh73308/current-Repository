// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import Tesseract from 'tesseract.js';
Cypress.Commands.add('extractTextFromImage', (imageSelector) => {
    cy.get(imageSelector).then($img => {
        const imageUrl = $img.attr('src');
        return new Cypress.Promise((resolve, reject) => {
            Tesseract.recognize(imageUrl)
                .then(({ data: { text } }) => {
                    resolve(text);
                })
                .catch(error => {
                    reject(error);
                });
        });
    });
});
