import po from '../../support/page-selector/po';

describe('Cypress training session', ()=>{
	it('Google search', ()=>{
		cy.visit('www.google.com')
		cy.get(po.input).trigger('focus').type('HP siteflow{enter}')
		cy.get(po.result).should('contain.text', 'hpsiteflow.com')
	})
})