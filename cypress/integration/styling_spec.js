describe('Styling', () => {
    it("tags marked as important are bold and underlined", () => {
      cy
      .get('.important')
      .should('have.css', 'font-weight', '700').and('have.css', 'text-decoration', 'underline')
    })
})