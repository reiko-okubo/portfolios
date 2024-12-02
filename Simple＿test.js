/// <reference types="Cypress" />
//cypresss- Spec
describe('My First Test', function() {
    it('My First Test case', function() {

   //ログイン
   cy.visit("https://sapphire-miletos.com/expense")
   cy.get('.MuiFormControl-root').type('miletos')
   cy.get('.MuiTouchRipple-root').click({force: true})
   //申請
   cy.get('.MuiBox-root').click()
   cy.get('.uiTypography-root MuiTypography-body1_1 ').click()

  })



  })
