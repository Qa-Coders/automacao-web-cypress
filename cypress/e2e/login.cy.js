/// <reference types="cypress" />
const element = require("../fixtures/login.json")

beforeEach(() => {
    cy.visit('https://automacao.qacoders-academy.com.br/login');
});

afterEach(() => {
    cy.screenshot();
})

describe('Login', () => {
    it('Login com sucesso', () => {
        const email = Cypress.env('EMAIL');
        const password = Cypress.env('PASSOWORD');
        cy.Login(email, password);
    });
    
    it('Login com e-mail válido e a senha inválida', () => {
        cy.get(element.input_email).type(Cypress.env('EMAIL'));
        cy.get(element.input_password).type(Cypress.env('PASSOWORD_INVALIDO'));
        cy.get(element.btn_login).click();
        cy.MsgLoginFalho()
    });

    it('Login com e-mail inválido e a senha válida', () => {
        cy.get(element.input_email).type(Cypress.env('EMAIL_INVALIDO'));
        cy.get(element.input_password).type(Cypress.env('PASSOWORD'));
        cy.get(element.btn_login).click();
        cy.MsgLoginFalho()
    });

});
