describe('Notes view', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.findByText(/login/i).should('exist');
    cy.findByText(/login/i).click().type('teacher@studyapp.com');
    cy.findByText(/password/i)
      .click()
      .type('Test123');
    cy.findByText(/sign in/i).click();
    cy.findByText(/logged as/i).should('exist');
  });

  it('Allows to create a new note and delete it', () => {
    cy.visit('/notes');
    cy.findByText(/title/i).click().type('Note 1');
    cy.findByText(/content/i)
      .click()
      .type('lorem ipsum dolor sit amet');
    cy.findByText(/add$/i).click();
    cy.findAllByText('Note 1').should('exist');
    cy.findAllByText('lorem ipsum dolor sit amet').should('exist');
    cy.findAllByText('Note 1')
      .first()
      .parent()
      .findByLabelText(/delete/i)
      .click();
    cy.findAllByText('Note 1').should('not.exist');
  });
});
