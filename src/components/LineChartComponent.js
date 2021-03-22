import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Row, Col } from 'reactstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const CustomFormatter = (value, name, props) => [value, name.replace(/_/g, ' '), props];
// const MaterialtootlipFormatter = (value, name, props) => [
//   (value = `${value} Cr`),
//   name.replace(/_/g, ' '),
//   props
// ];

const LineChartComponent = (props) => {
  const {
    data,
    handleStockChange,
    selectedStock,
    stockOtions,
    displayType,
    displayOptions,
    handleDisplayChange,
  } = props

  console.log(props);
  
  return (
    <>
      <Row>
        <Col md="6">
          <Select
            value={selectedStock}
            onChange={handleStockChange}
            options={stockOtions}
          />
        </Col>
        <Col md="6">
          <Select
            value={displayType}
            onChange={handleDisplayChange}
            options={displayOptions}
          />
        </Col>
      </Row>
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="x"/>
        <YAxis/>
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
        <Line type="monotone" dataKey="price" stroke="#82ca9d" />
      </LineChart>
    </>
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