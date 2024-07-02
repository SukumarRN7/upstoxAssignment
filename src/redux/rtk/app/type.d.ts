import {TUserHolding} from '../../../hooks/currentInvestments/type';

type TInitialAppState = {
  investments: {
    current: TUserHolding[];
    loading: boolean;
    hasError: boolean;
  };
};
