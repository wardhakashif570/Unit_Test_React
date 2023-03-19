import { render, screen } from '@testing-library/react';
import GreettestDrivenApproach from './greetTestDrivenApproach';

//we can grouping thte test
describe(GreettestDrivenApproach, () => {
    test("Greet Render Correctly", () => {
        render(<GreettestDrivenApproach />)
        const textElement = screen.getByText("Hello");
        expect(textElement).toBeInTheDocument();
    })

    test("Greet Render Correctly", () => {
        render(<GreettestDrivenApproach name='Wardha' />)
        const textElement = screen.getByText("Hello Wardha");
        expect(textElement).toBeInTheDocument();
    })
})

//test.only or test.skip these two are use for Filtering the test
//test.only or test.skip these two are use for Filtering the test we can do this with describe also