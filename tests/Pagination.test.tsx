import { fireEvent, render, screen } from "@testing-library/react";
import { Pagination } from "../src/components/Pagination";
import * as react from 'react';


describe('Pagination', () => {
  it('should render', () => {
    const component = render(<Pagination currentPage={1} numberOfPages={2} onChange={() => {}} />);
    expect(component).toMatchSnapshot();
  });
  it('should properly call callback', () => {
    const onChange = jest.fn();
    render(<Pagination currentPage={2} numberOfPages={3} onChange={onChange} />);
    fireEvent.click(screen.getByText('1'));
    expect(onChange).toBeCalledWith(1);
    fireEvent.click(screen.getByText('2'));
    expect(onChange).toBeCalledWith(2);
    fireEvent.click(screen.getByTestId('back'));
    expect(onChange).toBeCalledWith(1);
    fireEvent.click(screen.getByTestId('forward'));
    expect(onChange).toBeCalledWith(3);
  })
})