
// In your Cypress test file
describe('Text extraction from image', () => {
    // Ensure that uncaught exceptions are suppressed to prevent test failure
    before(() => {
        Cypress.on('uncaught:exception', () => {
            return false;
        });
    });

    it('Example to extract text from image', () => {
        // Visit the page with the image
        cy.visit('https://2captcha.com/demo/normal');
        
        // Use cy.task to call the defined task to extract text from the image
        cy.get('img[src="/dist/web/assets/captcha-rn1S3orp.jpg"]').then($img => {
            const imageUrl = $img.attr('src');
            
            // Call the task to extract text from the image
            return cy.task('extractTextFromImage', imageUrl).then(text => {
                // Log the extracted text to the Cypress test runner's console
                cy.log(text);
            });
        });
    });
});


      // https://on.cypress.io/clearlocalstorage