import "@testing-library/jest-dom/extend-expect";


jest.mock("@chakra-ui/core", () => {
    const modules = jest.requireActual("@chakra-ui/core");
    return {
        _osmodule: true,
        ...modules,
        useColorMode:jest.fn(),
        useTheme:jest.fn()

    }
});