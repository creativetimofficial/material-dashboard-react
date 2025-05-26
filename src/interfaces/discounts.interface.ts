export interface Discount {
  id: string;
  products: string[];
  type: 'total' | 'percentage';
  amount: number;
  start_date: Date;
  end_date: Date;
  enabled: boolean;
  _deleted: boolean;
}
