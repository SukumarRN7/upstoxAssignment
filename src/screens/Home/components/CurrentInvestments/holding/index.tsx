import React from 'react';
import {Text, View} from 'react-native';
import {TUserHolding} from '../../../../../hooks/currentInvestments/type';
import {APP_THEME} from '../../../../../theme';
import {styles} from '../styles';
import {
  calculateCurrentValue,
  calculateInvestmentValue,
} from '../../../../../utils/holdingCalculations';
import {HomeLocale} from '../../../../../locale/home.locale';
import {TEXT_SYMBOLS} from '../../../../../assets/textSymbols';

interface IHolding {
  holding: TUserHolding;
  isLastItem?: boolean;
}

export const Holding: React.FC<IHolding> = ({holding, isLastItem}) => {
  const {avgPrice, ltp, quantity, symbol} = holding;
  const currentValue = calculateCurrentValue(ltp, quantity);
  const investmentValue = calculateInvestmentValue(avgPrice, quantity);
  const pnl = currentValue - investmentValue ?? 0;

  return (
    <View
      style={{
        backgroundColor: APP_THEME.colors.white,
      }}>
      <View style={[styles.holdingContainer, isLastItem && styles.lastItem]}>
        <View>
          <Text style={styles.symbolText}>{symbol}</Text>
          <Text style={styles.holdingText}>{quantity}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text>
            {HomeLocale.LTP}{' '}
            <Text style={styles.valueText}>
              {TEXT_SYMBOLS.INR} {ltp}
            </Text>
          </Text>
          <Text style={styles.holdingText}>
            {HomeLocale.PL}{' '}
            <Text
              style={[
                styles.valueText,
                {
                  color:
                    pnl > 0 ? APP_THEME.colors.green : APP_THEME.colors.red,
                },
              ]}>
              {TEXT_SYMBOLS.INR} {pnl.toFixed(2)}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(Holding);
