import Work from "./Work";

//afficher le compte à rebours
describe("<Work />", () => {
  it("renders", () => {
    cy.mount(<Work />);
    cy.get(".timer").should("be.visible");
  });
});
