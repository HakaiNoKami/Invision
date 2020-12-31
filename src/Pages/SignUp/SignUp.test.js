import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SignUp from "./SignUp";

describe("Testando pagina de cadastro", () => {
  it("Quando digitar um e-mail válido", async () => {
    render(<SignUp />);
    let emailInputNode = screen.getByTestId("email");
    let emailInputValue = "marcus@teste.com";
    fireEvent.change(emailInputNode, { target: { value: emailInputValue } });
    expect(emailInputNode.value).toEqual(emailInputValue);
    expect(await screen.queryByText("O e-mail é inválido")).not.toBeInTheDocument();
  });

  it("Quando digitar um e-mail inválido", () => {
    render(<SignUp />);
    let emailInputNode = screen.getByTestId("email");
    let emailInputValue = "marcus@teste.c";
    fireEvent.change(emailInputNode, { target: { value: emailInputValue } });
    expect(emailInputNode.value).toEqual(emailInputValue);
    expect(screen.getByText("O e-mail é inválido")).toBeInTheDocument();
  });

  it("Quando digitar uma senha válida", async () => {
    render(<SignUp />);
    let passwordInputNode = screen.getByTestId("password");
    let passwordInputValue = "123456";
    fireEvent.change(passwordInputNode, { target: { value: passwordInputValue } });
    expect(passwordInputNode.value).toEqual(passwordInputValue);
    expect(await screen.queryByText("A senha não pode ter menos de 6 caracteres")).not.toBeInTheDocument();
  });

  it("Quando digitar uma senha inválida", () => {
    render(<SignUp />);
    let passwordInputNode = screen.getByTestId("password");
    let passwordInputValue = "123";
    fireEvent.change(passwordInputNode, { target: { value: passwordInputValue } });
    expect(passwordInputNode.value).toEqual(passwordInputValue);
    expect(screen.getByText("A senha não pode ter menos de 6 caracteres")).toBeInTheDocument();
  });

  it("Quando submeter o formulário com os inputs vazios", async () => {
    render(<SignUp />);
    let buttonSubmitNode = screen.getByTestId("button-submit");
    fireEvent.click(buttonSubmitNode);
    expect(await screen.findAllByText("Este campo não pode ser vazio")).toHaveLength(3);
  });
});
