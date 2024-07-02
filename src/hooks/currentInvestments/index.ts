import {calculateAllInvestmentValues} from '../../utils/holdingCalculations';
import {useDispatch, useSelector} from 'react-redux';
import * as AppThunk from '../../redux/rtk/app/appThunk';
import {RootState} from '../../redux/store';

export const useCurrentInvestments = () => {
  const dispatch = useDispatch();

  const {current, loading, hasError} = useSelector(
    (state: RootState) => state.app.investments,
  );

  const fetchCurrentInvestments = () =>
    dispatch(AppThunk.getCurrentInvestments());

  return {
    investments: current,
    loading,
    hasError,
    fetchCurrentInvestments,
    profitLossInfo: calculateAllInvestmentValues(current),
  };
};
