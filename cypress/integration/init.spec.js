describe('Cypress', () =>{
    it('is working', () => {
      expect(true).to.equal(true)  
    })

    it('visits the movie-app',()=>{
        cy.visit('/')
    })
})