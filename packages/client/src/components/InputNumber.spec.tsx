import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { InputNumber } from './InputNumber';

describe('InputNumber', () => {
  it('keeps the bordered field by default', () => {
    render(<InputNumber aria-label="count" />);
    const wrapper = screen.getByRole('spinbutton').closest('.rc-input-number');

    expect(wrapper).toHaveClass('w-full', 'border');
    expect(wrapper).not.toHaveClass('reset-rc-number-input');
  });

  it('draws the option variant as a borderless value that a caller can size', () => {
    render(<InputNumber aria-label="count" variant="option" className="w-12" />);
    const wrapper = screen.getByRole('spinbutton').closest('.rc-input-number');

    expect(wrapper).toHaveClass('border-0', 'reset-rc-number-input', 'text-right', 'w-12');
    expect(wrapper).not.toHaveClass('w-full');
  });
});
