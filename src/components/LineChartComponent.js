import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

// const CustomFormatter = (value, name, props) => [value, name.replace(/_/g, ' '), props];
// const MaterialtootlipFormatter = (value, name, props) => [
//   (value = `${value} Cr`),
//   name.replace(/_/g, ' '),
//   props
// ];

const LineChartComponent = ({ data }) => {
  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="name"/>
      <YAxis/>
      <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
    </LineChart>
  );
};

LineChartComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  keys: PropTypes.array,
  headerName: PropTypes.string,
  isLoading: PropTypes.bool,
  businessVal: PropTypes.string
};

export default LineChartComponent;