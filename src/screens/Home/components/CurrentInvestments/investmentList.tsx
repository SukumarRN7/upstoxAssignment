import React from 'react';
import {FlatList} from 'react-native';
import Holding from './holding';
import {styles} from './styles';
import {TUserHolding} from '../../../../hooks/currentInvestments/type';

const InvestmentList = ({list}: {list: TUserHolding[]}) => {
  const _renderItem = ({item, idx}: {item: TUserHolding; idx: number}) => (
    <Holding holding={item} key={idx} isLastItem={idx === list.length - 1} />
  );

  return (
    <FlatList
      data={list}
      contentContainerStyle={styles.scrollContainer}
      renderItem={_renderItem}
      keyExtractor={_handleKey}
    />
  );
};

export default InvestmentList;

const _handleKey = (_: TUserHolding, index: number) => `investment_${index}`;
