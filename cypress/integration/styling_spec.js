describe('Styling', () => {
    it("tags marked as important are bold and underlined", () => {
      cy
      .get('.important')
      .should('have.css', 'font-weight', '700').and('have.css', 'text-decoration', 'underline solid rgb(0, 0, 255)')
    })
    it("h3 header tags are marked as skills-header and are RebeccaPurple", () => {
      cy
      .get('#skills-header')
      .should('have.css', 'color', 'rgb(102, 51, 153)')
    })
    it("links ending in .com are green after visited", () => {
      cy
      .get('a[href$=".com"]').click()
      .should('have.css', 'color', 'rgb(0,128,0)')
    })
    it("tags marked as links-list have a symbol as a bullet point", () => {
      cy
      .get('.links-list')
      .should('have.css', 'list-style', 'outside url("https://github.githubassets.com/images/icons/emoji/unicode/1f310.png") disc')
    })
    it("the last child element in all ordered lists are bold", () => {
      cy
      .get('ol:last-child')
      .should('have.css', 'font-weight', '700')
    })
    it("elements with an href ending .com have a hover effect of turning red", () => {
      cy
      .get('a[href$=".com"]').click()
      .should('have.css', 'color', 'rgb(255, 0, 0)')
    })
    it("all other href elements without .com have a hover effect of turning orange", () => {
      cy
      .get('a').trigger('mouseover')
      .should('have.css', 'color', 'rgb(255,165,0)')
    })
    it("all text inside the body are centered", () => {
      cy
      .get('body')
      .should('have.css', 'text-align', 'center')
    })
    it("tags marked as language-list have italicized font", () => {
      cy
      .get('#language-list')
      .should('have.css', 'font-style', 'italic')
    })
    it("second p tag in the div has the background color of rgba(0,0,0,.5)", () => {
      cy
      .get('p:nth-child(2)')
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0.5)')
    })
})