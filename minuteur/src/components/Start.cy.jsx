import Start from "./Start";

//afficher le compte à rebours
describe("<Start />", () => {
  it("renders", () => {
    cy.mount(<Start />);
    cy.get("button").should("be.visible");
    cy.get("button").should(($button) => {
      expect($button).to.have.length(1);
      expect($button.first()).to.contain("Start");
    });
  });
});
