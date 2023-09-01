import App from "./App";

describe("<App />", () => {
  it("renders", () => {
    cy.mount(<App />);
    cy.get("h1").contains("Compte à rebours pomodoro");
    cy.get(".pomodoro").should("be.visible");
    cy.get(".buttons").should("be.visible");

    cy.get(".shortTimer").should("have.class", "shortTimer");
    cy.get(".shortTimer").click();

    cy.get("p").should(($p) => {
      expect($p.eq(0)).to.contain("C'est l'heure du café");

      const text = $p.eq(0).text();

      const words = text.split(" ");

      const wordCount = words.length;

      expect(wordCount).to.equal(4);
    });
  });
});
