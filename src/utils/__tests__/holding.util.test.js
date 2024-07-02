import {investmentsMock} from '../../../__mocks__/investmentMock';
import {
  calculateCurrentValue,
  calculateInvestmentValue,
  calculateTodayPNL,
  calculateAllInvestmentValues,
} from '../holdingCalculations';

describe('calculateCurrentValue', () => {
  test('calculates current value correctly', () => {
    expect(calculateCurrentValue(100, 5)).toBe(500);
  });
});

describe('calculateCurrentValue', () => {
  test('calculates current value correctly', () => {
    expect(calculateCurrentValue(5)).toBe(0);
  });
});

describe('calculateCurrentValue', () => {
  test('calculates current value correctly', () => {
    expect(calculateCurrentValue()).toBe(0);
  });
});

describe('calculateCurrentValue', () => {
  test('calculates current value correctly', () => {
    expect(calculateCurrentValue(undefined)).toBe(0);
  });
});

describe('calculateCurrentValue', () => {
  test('calculates current value correctly', () => {
    expect(calculateCurrentValue(undefined, undefined)).toBe(0);
  });
});

describe('calculateInvestmentValue', () => {
  test('calculates investment value correctly', () => {
    expect(calculateInvestmentValue(50, 10)).toBe(500);
  });
});

describe('calculateInvestmentValue', () => {
  test('calculates investment value correctly', () => {
    expect(calculateInvestmentValue(10)).toBe(0);
  });
});

describe('calculateInvestmentValue', () => {
  test('calculates investment value correctly', () => {
    expect(calculateInvestmentValue()).toBe(0);
  });
});

describe('calculateInvestmentValue', () => {
  test('calculates investment value correctly', () => {
    expect(calculateInvestmentValue(undefined)).toBe(0);
  });
});

describe('calculateInvestmentValue', () => {
  test('calculates investment value correctly', () => {
    expect(calculateInvestmentValue(undefined, undefined)).toBe(0);
  });
});

describe('calculateTodayPNL', () => {
  test('calculates today PNL correctly', () => {
    expect(calculateTodayPNL(150, 120, 5)).toBe(150);
  });
});

describe('calculateTodayPNL', () => {
  test('calculates today PNL correctly', () => {
    expect(calculateTodayPNL(undefined, 120, 5)).toBe(0);
  });
});

describe('calculateTodayPNL', () => {
  test('calculates today PNL correctly', () => {
    expect(calculateTodayPNL(undefined, undefined, 5)).toBe(0);
  });
});

describe('calculateTodayPNL', () => {
  test('calculates today PNL correctly', () => {
    expect(calculateTodayPNL(undefined, undefined, undefined)).toBe(0);
  });
});

describe('calculateTodayPNL', () => {
  test('calculates today PNL correctly', () => {
    expect(calculateTodayPNL(null, undefined, '')).toBe(0);
  });
});

describe('calculateTodayPNL', () => {
  test('calculates today PNL correctly', () => {
    expect(calculateTodayPNL()).toBe(0);
  });
});

describe('calculateAllInvestmentValues', () => {
  test('calculates total values correctly', () => {
    const result = calculateAllInvestmentValues(investmentsMock);
    expect(result.currentValueTotal).toBe(110 * 5 + 55 * 10);
    expect(result.investedValueTotal).toBe(100 * 5 + 50 * 10);
    expect(result.todayPNL).toBe((120 - 110) * 5 + (60 - 55) * 10);
    expect(result.PNL).toBe(110 * 5 + 55 * 10 - (100 * 5 + 50 * 10));
  });

  test('handles empty investments array', () => {
    const result = calculateAllInvestmentValues([]);
    expect(result.currentValueTotal).toBe(0);
    expect(result.investedValueTotal).toBe(0);
    expect(result.todayPNL).toBe(0);
    expect(result.PNL).toBe(0);
  });

  test('handles null/undefined investments', () => {
    const result = calculateAllInvestmentValues(null);
    expect(result.currentValueTotal).toBe(0);
    expect(result.investedValueTotal).toBe(0);
    expect(result.todayPNL).toBe(0);
    expect(result.PNL).toBe(0);
  });
});
