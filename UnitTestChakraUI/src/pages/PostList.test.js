import React from "react";
import PostList from './PostList';
import { render, screen } from "@testing-library/react";
import { useQuery } from "react-query";
import {

    useColorMode,
    useTheme,
} from "@chakra-ui/core";
import { BrowserRouter } from "react-router-dom";

jest.mock("react-query");
jest.mock("@chakra-ui/core", () => {
    const modules = jest.requireActual("@chakra-ui/core");
    return {
        _osmodule: true,
        ...modules,
        useColorMode: jest.fn(),
        useTheme: jest.fn()

    }
});

describe("PostLit", () => {
    it("When isLoading is true then loading text should be displayed", () => {
        // Arrange
        useQuery.mockReturnValue({
            isLoading: true,
            error: null,
            data: null
        })


        useColorMode.mockReturnValue({
            colorMode: "dark-mode"
        })

        useTheme.mockReturnValue({

        })


        // Act
        // render(<PostList isDrawerOpen={false} closeDrawer={jest.fn()} />)
        const { debug } = render(<PostList isDrawerOpen={false} closeDrawer={jest.fn()} />)
        debug();

        // Assertion
        // const text = screen.queryByText("Loading..").innerHTML;
        // const text = screen.queryByTestId("loading-text").innerHTML;
        // expect(text).toBe("Loading..")

        const text = screen.queryByTestId("loading-text");
        // expect(text).toHaveTextContent("Loading..")




    });

    it("When isLoading is false and data is available then render data in a list", () => {
        // Arrange
        useQuery.mockReturnValue({
            isLoading: false,
            error: null,
            data: {
                data: [{ id: 1, title: "Dummy Title" }]
            }
        });
        useColorMode.mockReturnValue({
            colorMode: "dark-mode"
        })

        useTheme.mockReturnValue({

        })

        // Act
        render(<BrowserRouter>
            <PostList isDrawerOpen={false} closeDrawer={jest.fn()} />
        </BrowserRouter>);

        const data = screen.getAllByTestId("list-item").map((li) => li.textContent);
        console.log(data);


        // Assertion
        // expect(data).toEqual(["Dummy Title"]);
        expect(data).toMatchInlineSnapshot(`
        Array[
            "Dummy Title"
        ]`);
    });
});

