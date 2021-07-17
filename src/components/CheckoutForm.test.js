import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    const header = screen.getByRole('heading');

    expect(header).toBeInTheDocument;
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);
    const fNameInput = screen.getByLabelText('First Name:');
    const lNameInput = screen.getByLabelText('Last Name:');
    const addressInput = screen.getByLabelText('Address:');
    const cityInput = screen.getByLabelText('City:');
    const stateInput = screen.getByLabelText('State:');
    const zipInput = screen.getByLabelText('Zip:');
    const submitButton = screen.getByRole('button');

    userEvent.type(fNameInput, 'The');
    userEvent.type(lNameInput, 'Hu');
    userEvent.type(addressInput, '666 Rock');
    userEvent.type(cityInput, 'Mongolia');
    userEvent.type(stateInput, 'XX');
    userEvent.type(zipInput, '99999');
    userEvent.click(submitButton);

    const successMessage = screen.queryByTestId('successMessage');
    
    expect(successMessage).toBeInTheDocument;
    expect(successMessage).toHaveTextContent(
        "You have ordered some plants! Woo-hoo! 🎉Your new green friends will be shipped to:The Hu666 RockMongolia, XX 99999"
        );
});
