import BreakTimer from "./BreakTimer";

//afficher le compte à rebours
describe("<BreakTimer />", () => {
  it("renders", () => {
    cy.mount(<BreakTimer />);
    cy.get("button").should("be.visible");
    cy.get("button").should(($button) => {
      expect($button).to.have.length(1);
      expect($button.first()).to.contain("05:00");
    });
  });
});
