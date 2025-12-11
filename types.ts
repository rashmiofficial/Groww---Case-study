export enum OrderType {
  BUY = 'BUY',
  SELL = 'SELL'
}

export enum OrderStatus {
  PENDING = 'PENDING',
  EXECUTED = 'EXECUTED',
  CANCELLED = 'CANCELLED'
}

export interface Order {
  id: string;
  symbol: string;
  type: OrderType;
  quantity: number;
  filledQuantity: number;
  price: number;
  triggerPrice?: number;
  targetPrice?: number;
  productType: 'Intraday' | 'Delivery';
  status: OrderStatus;
  marketPrice?: boolean;
}

export interface IndexData {
  name: string;
  value: number;
  change: number;
  percentChange: number;
}