describe("Styling", () => {
  it("header tags all contain the important class", () => {
    cy.get("h1, h2, h3, h4, h5, h6").each((node) => expect(node).to.have.class("important"));
  });

  it("tags marked as important are bold and underlined", () => {
    cy.get(".important")
      .should("have.css", "font-weight", "700")
      .and("have.css", "text-decoration", "underline solid rgb(0, 0, 255)");
  });

  it("h2 skills header has the skills-header id and is RebeccaPurple", () => {
    cy.get("h2#skills-header")
      .contains("Here are some of my Skills!")
      .should("have.css", "color", "rgb(102, 51, 153)");
  });

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Privacy_and_the_:visited_selector
  it.skip("links ending in .com are green after visited", () => {
    cy.get('a[href="https://github.com"]')
      .first()
      .click()
      .go("back")
      .get('a[href="https://github.com"]')
      .first()
      .should("have.css", "color", "rgb(0,128,0)");
  });

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Privacy_and_the_:visited_selector
  it.skip("links not ending in .com are not green after visited", () => {
    cy.get('a[href="https://pursuit.org"]')
      .first()
      .click()
      .go("back")
      .get('a[href="https://pursuit.org"]')
      .first()
      .should("not.have.css", "color", "rgb(0,128,0)");
  });

  it("tags marked as links-list have a symbol as a bullet point", () => {
    cy.get(".links-list").should(
      "have.css",
      "list-style",
      'outside url("https://github.githubassets.com/images/icons/emoji/unicode/1f310.png") disc'
    );
  });

  it("the first child element in all ordered lists are not bold", () => {
    cy.get("ol li:first-child").should("not.have.css", "font-weight", "700");
  });

  it("the last child element in all ordered lists are bold", () => {
    cy.get("ol li:last-child").should("have.css", "font-weight", "700");
  });

  // https://github.com/cypress-io/cypress/issues/311
  it.skip("links ending in .com are red when hovered", () => {
    cy.get('a[href="https://github.com"]')
      .first()
      .hover()
      .should("have.css", "color", "rgb(255,0,0)");
  });

  // https://github.com/cypress-io/cypress/issues/311
  it.skip("links not ending in .com are orange when hovered", () => {
    cy.get('a[href="https://pursuit.org"]')
      .first()
      .hover()
      .should("have.css", "color", "rgb(0,128,0)");
  });

  it("all text inside the body are centered", () => {
    cy.get("body").should("have.css", "text-align", "center");
  });

  it("tags marked as language-list have italicized font", () => {
    cy.get("ul#language-list").should("have.css", "font-style", "italic");
  });

  it("second p tag in the div has the background color of rgba(0,0,0,.5)", () => {
    cy.get("p:nth-child(3)").should("have.css", "background-color", "rgba(0, 0, 0, 0.5)");
  });
});
