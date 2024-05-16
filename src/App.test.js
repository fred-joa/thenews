import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./layout/Header";

    test("Testing the header",()=>{
        render(
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        );
        const head = screen.getByTestId("header");
        expect(head).toBeInTheDocument();
    })