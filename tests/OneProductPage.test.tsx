import './matchMedia';
import * as storeHooks from "../src/hooks/storeHooks";
import { RenderResult, fireEvent, render, screen } from '@testing-library/react';
import { OneProductPage } from "../src/components/OneProductPage";
import { AllProviders } from "./testUtils";
import * as productSlice from '../src/store/slices/productsSlice';
import { IProduct } from '../src/data/catalog';
import * as routerDom from 'react-router-dom';
import * as cartSlice from '../src/store/slices/cartSlice';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ id: '99' }),
}));

const selectProductsStatus = jest.spyOn(productSlice, 'selectProductsStatus');
const selectProductsByIds = jest.spyOn(productSlice, 'selectProductsByIds');
const useParams = routerDom.useParams;
const selectProductInCartCount = jest.spyOn(cartSlice, 'selectProductInCartCount');
const useDispatch = jest.spyOn(storeHooks, 'useAppDispatch');
const dispatch = jest.fn();

const product = {
  imageUrl: 'aosImg',
  name: 'AOS',
  quantityType: 'объем',
  amount: '450 мл',
  description: 'средство для мытья посуды Crystal',
  fullDescription: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Использовало составитель, до ее безопасную рукописи за риторический скатился ему имеет предупреждал собрал по всей заголовок решила жизни, запятой его буквенных агентство если свое над переписали. Собрал гор журчит домах необходимыми.',
  barcode: '4604049097548',
  manufacturer: 'Нэфис',
  brand: 'AOS',
  price: 48.76,
  id: '0',
  types: ['body'],
  isPopular: true
} as IProduct;

selectProductsStatus.mockReturnValue('succeeded');
selectProductsByIds.mockReturnValue(() => [product]);
selectProductInCartCount.mockReturnValue(() => 0);
useDispatch.mockReturnValue(dispatch);
let component: RenderResult;

beforeEach(() => {
  selectProductsStatus.mockReturnValue('succeeded');
  selectProductsByIds.mockReturnValue(() => [product]);
  selectProductInCartCount.mockReturnValue(() => 0);
  useDispatch.mockReturnValue(dispatch);
  component = render(
    <AllProviders>
      <OneProductPage />
    </AllProviders>
  );
  
});
describe('OneProductPage', () => {
  it('Render', () => {
    expect(component).toMatchSnapshot();
  });
  it('Check product status', () => {
    expect(selectProductsStatus).toBeCalled();
  });
  it('Get id from URL', () => {
    expect(useParams).toBeCalled();
  });
  it('Get product data by the id', () => {
    expect(selectProductsByIds).toBeCalledWith(['99']);
  });
  it('Get products count by the id', () => {
    expect(selectProductInCartCount).toBeCalledWith('99');
  });
  it('Dispatch plusToCart on button click', async () => {
    let addBtn = await screen.findByTestId('addBtn');
    fireEvent.click(addBtn as Element);
    expect(dispatch).toBeCalledWith(cartSlice.plusToCart('99'));
  });
});