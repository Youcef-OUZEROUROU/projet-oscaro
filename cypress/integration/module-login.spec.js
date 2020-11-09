describe('Téster le login oscaro', () => {

    beforeEach(() =>{
        cy.visit("https://www.oscaro.com/fr/form/login?target=account-home")
        cy.url().should('contain', '/form/login?target=account-home')
        cy.wait(2000)
    })
    
    it('testé le champ email vide', () => {
        cy.get('#login/email').type(' ').should('have.value',' ')
        cy.get('#login/password').type('Youcef87@').should('have.value','Youcef87@') 
         cy.get('#login/remember-me').check({force:true}).should('be.checked') 
         cy.get('.form-message').should('contain','Le champ "Email" est obligatoire')
    })
    it('testé le champ email que avec des chiffre', () => {
        cy.get('#login/email').type('654654').should('have.value','654654')
        cy.get('#login/password').type('Youcef87@').should('have.value','Youcef87@')
         cy.get('#login/remember-me').check({force:true}).should('be.checked') 
         cy.get('.form-message').should('contain','Adresse e-mail incorrecte')
    })
    it('testé le champ email que avec des lettres', () => {
        cy.get('#login/email').type('klfdlflkdf').should('have.value','klfdlflkdf')
        cy.get('#login/password').type('Youcef87@').should('have.value','Youcef87@')
         cy.get('#login/remember-me').check({force:true}).should('be.checked')
         cy.get('.form-message').should('contain','Adresse e-mail incorrecte')
       
    })
    it('testé le champ email sans @', () => {
        cy.get('#login/email').type('youcefyopmail.com').should('have.value','youcefyopmail.com')
        cy.get('#login/password').type('Youcef87@').should('have.value','Youcef87@')
         cy.get('.form-message').should('contain','Adresse e-mail incorrecte')
       
    })
    it("testé le champ email sans la fin de l'email", () => {
        cy.get('#login/email').type('youcef@yopmail').should('have.value','youcef@yopmail')
        cy.get('#login/password').type('Youcef87@').should('have.value','Youcef87@')
         cy.get('.form-message').should('contain','Adresse e-mail incorrecte')
       
    })
    it('testé le champ password vide', () => {
        cy.get('#login/email').type('youcef@yopmail.com').should('have.value','youcef@yopmail.com')
        cy.get('#login/password').type(' ').should('have.value',' ')
         cy.get('.form-message').should('contain','Champ obligatoire')
       
    })
    it('testé le champ password que avec des chiffres', () => {
        cy.get('#login/email').type('youcef@yopmail.com').should('have.value','youcef@yopmail.com')
        cy.get('#login/password').type('4654646').should('have.value','4654646')
         cy.get('.form-message').should('contain',"L'adresse e-mail ou le mot de passe ne correspondent pas.")   
       
    })
    it('testé le champ password que avec des lettres et faux', () => {
        cy.get('#login/email').type('youcef@yopmail.com').should('have.value','youcef@yopmail.com')
        cy.get('#login/password').type('lkdfkl').should('have.value','lkdfkl')
        cy.get('.toast').should('contain',"L'adresse e-mail ou le mot de passe ne correspondent pas.")
       
    })
    
    it('testé le champ email faux avec un password correct', () => {
        cy.get('#login/email').type('youcef55@yopmail.com').should('have.value','youcef55@yopmail.com')
        cy.get('#login/password').type('Youcef87@').should('have.value','Youcef87@')
        cy.get('.toast').should('contain',"L'adresse e-mail ou le mot de passe ne correspondent pas.")
    })

    it('testé le champ email correct avec un password correct', () => {
        cy.get('#login/email').type('youcef@yopmail.com').should('have.value','youcef@yopmail.com')
        cy.get('#login/password').type('Youcef87@').should('have.value','Youcef87@')
         cy.get('#login/remember-me').check({force:true}).should('be.checked')
         cy.url().should('contain','/account/home')
       
    })
})