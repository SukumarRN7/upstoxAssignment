export type TUserHolding = {
  avgPrice: number;
  close: number;
  ltp: number;
  quantity: number;
  symbol: string;
};

export type TProfitLossInfo = {
  PNL: number;
  currentValueTotal: number;
  investedValueTotal: number;
  todayPNL: number;
};
