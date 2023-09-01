import App from "./App";

//afficher le compte à rebours
describe("<App />", () => {
  it("renders", () => {
    cy.mount(<App />);
    cy.get("h1").contains("Compte à rebours pomodoro");
    cy.get("img").contains("src");
    cy.get("button").contains("Startbutton");
  });
});
