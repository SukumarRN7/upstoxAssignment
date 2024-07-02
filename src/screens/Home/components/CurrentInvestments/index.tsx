import React, {useEffect} from 'react';
import {View} from 'react-native';
import {ProfitLoss} from './profitLoss/profitLoss';
import {useCurrentInvestments} from '../../../../hooks/currentInvestments';

import {GlobalStyle} from '../../../../globalStyle';

import ErrorView from '../../../../components/errorView';
import NoInvestments from './noInvestments';
import InvestmentList from './investmentList';
import CustomLoader from '../../../../components/loader';

const CurrentInvestments = () => {
  const {
    investments,
    profitLossInfo,
    loading,
    hasError,
    fetchCurrentInvestments,
  } = useCurrentInvestments();

  useEffect(() => {
    fetchCurrentInvestments();
  }, []);

  if (hasError) {
    return <ErrorView retry={fetchCurrentInvestments} />;
  }

  if (loading) {
    return <CustomLoader />;
  }

  if (!investments.length) {
    return <NoInvestments />;
  }

  return (
    <View style={GlobalStyle.container}>
      <InvestmentList list={investments} />
      <ProfitLoss info={profitLossInfo} />
    </View>
  );
};

export default CurrentInvestments;
