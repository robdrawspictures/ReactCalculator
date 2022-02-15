describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should have working operation buttons', () => {
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#operator_add').click();
    cy.get('#operator_add').click();
    cy.get('.display').should('contain', '9');
  })

  it('should be able to chain operations', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0');
  });

  it('should correctly display a range of numbers (negative, decimal, etc)', () => {
    cy.get('#number8').click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-1');
    cy.get('#clear').click();
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '1.5');
    cy.get('#clear').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click()
    cy.get('#operator-multiply').click()
    cy.get('#operator-multiply').click()
    cy.get('#operator-multiply').click()
    cy.get('.display').should('contain', '1e+30');
  })

  it('should be a 20-year-old meme', () => {
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'lol epic meme bro');
  })

})

// Do the number buttons update the display of the running total? DONE
// Do the arithmetical operations update the display with the result of the operation? DONE
// Can multiple operations be chained together? DONE
// Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)? DONE
// What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement). DONE