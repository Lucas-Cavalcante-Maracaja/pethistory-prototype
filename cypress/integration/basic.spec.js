describe('Prototype pages and data', () => {

  describe('Index Page', () => {
    it('Go to Login if user not set', () => {
      cy.visit('/').window().its('store').invoke('dispatch', {
        type: 'setUser',
        payload: { name: '', type: '' }
      })
      
      cy.url().should('include', '/login')

    })
    
  })
  describe('Login Page', () => {
    beforeEach(() => {
      cy.visit('/login')
    })


    it('successfully login', () => {

      cy.get('#tfName').type('Marcus')
      cy.get('#tfPassword').type('12345')
      cy.get('#btnSubmit').click()
      cy.url().should('include', '/animal')
    })
    it('fail login', () => {

      cy.get('#tfName').type('Marcus')
      cy.get('#tfPassword').type('1234')
      cy.get('#btnSubmit').click()
      cy.get('#txtFailLogin')
    })
  })

  describe('List Animals Page', () => {
    beforeEach(() => {
      cy.visit('/login')
      cy.get('#tfName').type('Marcus')
      cy.get('#tfPassword').type('12345')
      cy.get('#btnSubmit').click()
    })


    it('load list animals', () => {
      cy.get('.react-tabs__tab--selected').contains("Animais")
      cy.get('#lsAnimal>.sknui-div').should('have.length', 3)
    })

    it('load deactivated animals', () => {
      cy.contains('Animais desativados').click()
      cy.get('.react-tabs__tab--selected').contains("Animais desativados")
      cy.get('#lsAnimal>.sknui-div').should('have.length', 1)

    })
  })
  describe('Animal Page', () => {
    beforeEach(() => {
      cy.visit('/login')
      cy.get('#tfName').type('Marcus')
      cy.get('#tfPassword').type('12345')
      cy.get('#btnSubmit').click()
    })


    it('load animal 3 page with medical history', () => {
      cy.get('#btnAnimal3').click()
      cy.contains("Bilbo")
      cy.get('#lsHistory>.sknui-div').should('have.length', 3)
    })

    it('load animal 3 on going treatments', () => {
      cy.get('#btnAnimal3').click()
      cy.get("li[role='tab'").contains("Tratamentos").click()
      cy.contains('Tratamentos em andamento')
      cy.get('#lsTreatment>.sknui-div').should('have.length', 1)

    })
    it('load animal 3 concluded treatments', () => {
      cy.get('#btnAnimal3').click()
      cy.get("li[role='tab'").contains("Tratamentos").click()
      cy.contains('Tratamentos concluídos').click()
      cy.get('#lsTreatment>.sknui-div').should('have.length', 2)

    })
    it('load animal 3 conditions', () => {
      cy.get('#btnAnimal3').click()
      cy.get("li[role='tab'").contains("Condições").click()
      cy.get('#lsCondition>.sknui-div').should('have.length', 1)

    })
  })
  describe('Treatments Page', () => {
    beforeEach(() => {
      cy.visit('/login')
      cy.get('#tfName').type('Marcus')
      cy.get('#tfPassword').type('12345')
      cy.get('#btnSubmit').click()
      cy.get('#btnTreatments').click()
    })


    it('load page with 4 on going treatments', () => {

      cy.get('#lsTreatment>.sknui-div').should('have.length', 4)
    })

    it('load page with 4 concluded treatments', () => {

      cy.contains('Tratamentos concluídos').click()
      cy.get('#lsTreatment>.sknui-div').should('have.length', 3)
    })

  })

})