import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { showNextThreeAllUsers } from "../utils/showNextThreeAllUsers";

describe("App component", () => {
  test("Rederizado del componete App", async () => {
    render(<App />);

    // Comprobamos que no hay errores durante el renderizado
    expect(screen.queryByText(/error/i)).toBeNull();
  });

  test("Renderizado de botones en orden", () => {
    render(<App />);

    // Definimos el nombre y orden de los botones de los botones
    const buttonOrder = ["All", "Live", "Dead"];

    // Iteramos sobre el orden y verificamos cada botón
    buttonOrder.forEach((buttonName) => {
      // Obtener el botón actual
      const currentButton = screen.getByRole("button", { name: buttonName });

      // Verificar que el botón está presente y es un botón
      expect(currentButton).toBeInTheDocument();

      // Hacemos clic en el botón actual
      fireEvent.click(currentButton);
    });
  });

  test("Comprobamos función showNextThreeAllUsers", () => {
    // Configuramos los estados y las funciones necesarias
    let isIfBranchExecuted;
    let allUsers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    // let allUsers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    let itemsPerPage = 8;
    const setStateUsers = jest.fn();
    const setCountAllUsers = jest.fn();
    const setItemsPerPage = jest.fn();

    render(<App />);

    // Realizamos la llamada a showNextThreeAllUsers con los parámetros esperados
    showNextThreeAllUsers(
      setStateUsers,
      allUsers,
      setCountAllUsers,
      itemsPerPage,
      setItemsPerPage
    );

    //Verificamos que showNextThreeAllUsers se ha llamado con los parámetros esperados
    expect(setStateUsers).toHaveBeenCalledWith("All");
    expect(setItemsPerPage).toHaveBeenCalledWith(itemsPerPage + 8);
    if (allUsers.length - itemsPerPage < 8) {
      expect(setCountAllUsers).toHaveBeenCalledWith(expect.any(Function)); // Podrías ajustar esto según tus necesidades
      isIfBranchExecuted = 1;
    } else {
      isIfBranchExecuted = 2;
      expect(setCountAllUsers).not.toHaveBeenCalled();
    }
    console.log("if = 1, else = 2", isIfBranchExecuted);
  });
});
