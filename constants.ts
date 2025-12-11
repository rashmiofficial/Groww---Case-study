import { IndexData, Order, OrderType, OrderStatus } from './types';

export const INDICES: IndexData[] = [
  {
    name: "NIFTY 50",
    value: 20675.12,
    change: 86.80,
    percentChange: 0.85
  },
  {
    name: "BANK NIFTY",
    value: 46675.12,
    change: 86.80,
    percentChange: 0.85
  },
  {
    name: "SENSEX",
    value: 74391.27,
    change: -275.01,
    percentChange: -0.32
  }
];

export const MOCK_ORDERS: Order[] = [
  {
    id: '1',
    symbol: 'Swiggy',
    type: OrderType.BUY,
    quantity: 20,
    filledQuantity: 0,
    price: 498.00,
    productType: 'Intraday',
    status: OrderStatus.PENDING,
    marketPrice: false
  },
  {
    id: '2',
    symbol: 'Swiggy',
    type: OrderType.SELL,
    quantity: 20,
    filledQuantity: 0,
    price: 498.00,
    productType: 'Intraday',
    status: OrderStatus.PENDING,
    marketPrice: false
  }
];

export const TABS = ["Explore", "Holdings", "Positions", "Orders", "Watchlist"];