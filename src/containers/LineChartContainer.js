import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import LineChartComponent from '../components/LineChartComponent';

const LineChartContainer = ({ chartData, headerName, businessVal }) => {
  const { isLoading } = useSelector((state) => state.dashboardReducer);
  const { data, keys } = chartData;
  return (
    <LineChartComponent
      data={data}
      keys={keys}
      headerName={headerName}
      isLoading={isLoading}
      businessVal={businessVal}
    />
  );
};

LineChartContainer.propTypes = {
  chartData: PropTypes.object.isRequired,
  headerName: PropTypes.string,
  businessVal: PropTypes.string
};
export default LineChartContainer;
