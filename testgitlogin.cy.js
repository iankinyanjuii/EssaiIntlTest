describe('GitHub Login Automation', () => {
  it('should log in successfully', () => {
    cy.visit('https://github.com/login');

    cy.get('input[name="login"]').type('githubtester003@gmail.com');
    cy.get('input[name="password"]').type('L10n5d3n!');
    cy.get('input[type="submit"]').click();

    cy.url().should('include', '/github.com');
  });

  it('should handle invalid credentials', () => {
    cy.visit('https://github.com/login');

    cy.get('input[name="login"]').type('githubtester003@gmail.com');
    cy.get('input[name="password"]').type('L10n5d3n');
    cy.get('input[type="submit"]').click();

    cy.get('#js-flash-container').should('contain', 'Incorrect username or password.');
  });

  it('should handle missing password', () => {
    cy.visit('https://github.com/login');

    cy.get('input[name="login"]').type('githubtester003@gmail.com');
    cy.get('input[name="password"]').clear();
    cy.get('input[type="submit"]').click();

    cy.get('#js-flash-container').should('contain', 'Password is required.');
  });
});
