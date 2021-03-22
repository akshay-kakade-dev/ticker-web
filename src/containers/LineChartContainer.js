import React, { useEffect, useState } from 'react';
import LineChartComponent from '../components/LineChartComponent';

const LineChartContainer = () => {
  const stockOtions = [
    { value: 'MSFT', label: 'MSFT' },
    { value: 'AMZN', label: 'AMZN' },
    { value: 'AAPL', label: 'AAPL' },
  ];

  const displayOptions = [
    { value: 'day', label: 'day' },
    { value: 'hours', label: 'hours' }
  ];

  const [chartData, setChartData] = useState([]);
  const [selectedStock, setSelectedStock] = useState(stockOtions[0]);
  const [displayType, setDisplayType] = useState(displayOptions[0]);
  
  const handleStockChange = (event) => {
    setSelectedStock({...event});
  };

  const handleDisplayChange = (event) => {
    setDisplayType({...event});
  };

  const fetchChartData = () => {
    fetch(`http://localhost:3001/share_chart?symbol=${selectedStock.value}&display_type=${displayType.value}`)
    .then(res => res.json())
    .then(
      (result) => {
        setChartData(result.data);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        
      }
    )
  };
  
  useEffect (() => {
    fetchChartData();
  }, [selectedStock, displayType]);

  return (
    <LineChartComponent
      data={chartData}
      handleStockChange={handleStockChange}
      selectedStock={selectedStock}
      stockOtions={stockOtions}
      displayOptions={displayOptions}
      handleDisplayChange={handleDisplayChange}
      displayType={displayType}
    />
  );
};

export default LineChartContainer;
