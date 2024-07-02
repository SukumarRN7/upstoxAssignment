import React from 'react';
import {StyleSheet, View} from 'react-native';
import {APP_THEME} from '../../../../../theme';
import Accordian from '../../../../../components/accordian';
import {TitleValue} from './TitleValue';
import {TEXT_SYMBOLS} from '../../../../../assets/textSymbols';
import {TProfitLossInfo} from '../../../../../hooks/currentInvestments/type';

interface IProfitLoss {
  info: TProfitLossInfo;
}

const infoSet = {
  'Current Value': 0,
  'Total Investment': 0,
  "Today's profit & Loss": 0,
};

export const ProfitLoss: React.FC<IProfitLoss> = ({info}) => {
  const {PNL, currentValueTotal, investedValueTotal, todayPNL} = info;

  const getValue = (idx: number) => {
    switch (idx) {
      case 0:
        return `${TEXT_SYMBOLS.INR} ${currentValueTotal.toFixed(2)}`;
      case 1:
        return `${TEXT_SYMBOLS.INR} ${investedValueTotal.toFixed(2)}`;
      case 2:
        return `${TEXT_SYMBOLS.INR} ${todayPNL.toFixed(2)}`;
      default:
        return '';
    }
  };

  return (
    <View style={styles.container}>
      <Accordian>
        <View>
          {Object.keys(infoSet).map((item, idx) => {
            return (
              <TitleValue
                key={idx}
                title={item}
                value={getValue(idx)}
                style={styles.infoSetTitleValue}
              />
            );
          })}
        </View>
      </Accordian>
      <View style={styles.profitLossContainer}>
        <TitleValue
          title={'Profit & Loss'}
          value={`${TEXT_SYMBOLS.INR} ${PNL.toFixed(2)}`}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: APP_THEME.colors.white,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  profitLossContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  infoSetTitleValue: {
    paddingBottom: 2,
  },
});
