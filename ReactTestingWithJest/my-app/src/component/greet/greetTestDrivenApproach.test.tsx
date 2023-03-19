import { render, screen } from '@testing-library/react';
import GreettestDrivenApproach from './greetTestDrivenApproach';

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