import {TUserHolding} from '../hooks/currentInvestments/type';

export const calculateCurrentValue = (LTP: number, Qty: number) =>
  LTP * Qty || 0;
export const calculateInvestmentValue = (AvgPrice: number, Qty: number) =>
  AvgPrice * Qty || 0;
export const calculateTodayPNL = (close: number, ltp: number, qty: number) =>
  (close - ltp) * qty || 0;

export const calculateAllInvestmentValues = (investments: TUserHolding[]) => {
  let currentValueTotal = 0;
  let investedValueTotal = 0;
  let todayPNL = 0;

  investments?.forEach(investment => {
    const {avgPrice, close, ltp, quantity} = investment;
    currentValueTotal += calculateCurrentValue(ltp, quantity);
    investedValueTotal += calculateInvestmentValue(avgPrice, quantity);
    todayPNL += calculateTodayPNL(close, ltp, quantity);
  });

  return {
    currentValueTotal,
    investedValueTotal,
    todayPNL,
    PNL: currentValueTotal - investedValueTotal,
  };
};
