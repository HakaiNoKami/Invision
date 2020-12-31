import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SignIn from "./SignIn";

describe("Testando pagina de login", () => {
  it("Quando digitar um e-mail correto", async () => {
    render(<SignIn />);
    let emailInputNode = screen.getByTestId("email");
    let emailInputValue = "marcus@teste.com";
    fireEvent.change(emailInputNode, { target: { value: emailInputValue } });
    expect(emailInputNode.value).toEqual(emailInputValue);
    expect(await screen.queryByText("O e-mail está incorreto")).not.toBeInTheDocument();
  });

  it("Quando digitar um e-mail incorreto", () => {
    render(<SignIn />);
    let emailInputNode = screen.getByTestId("email");
    let emailInputValue = "marcus@teste.c";
    fireEvent.change(emailInputNode, { target: { value: emailInputValue } });
    expect(emailInputNode.value).toEqual(emailInputValue);
    expect(screen.getByText("O e-mail está incorreto")).toBeInTheDocument();
  });

  it("Quando submeter o formulário com os inputs vazios", async () => {
    render(<SignIn />);
    let buttonSubmitNode = screen.getByTestId("button-submit");
    fireEvent.click(buttonSubmitNode);
    expect(await screen.findAllByText("Este campo não pode ser vazio")).toHaveLength(2);
  });
});
