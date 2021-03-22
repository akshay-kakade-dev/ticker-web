import React, { useEffect, useState } from 'react';
import LineChartComponent from '../components/LineChartComponent';

const LineChartContainer = () => {
  const stockOtions = [
    { value: 'MSFT', label: 'MSFT' },
    { value: 'AMZN', label: 'AMZN' },
    { value: 'AAPL', label: 'AAPL' },
  ];

  const [chartData, setChartData] = useState([]);
  const [selectedStock, setSelectedStock] = useState(stockOtions[0]);
  const [displayType, setDisplayType] = useState('days');
  
  const handleStockChange = (event) => {
    setSelectedStock(event);
    fetchChartData();
  };

  const fetchChartData = () => {
    fetch(`http://localhost:3001/share_chart?symbol=${selectedStock.value}&display_type=${displayType}`)
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
  
  useEffect(() => {
    fetchChartData();
  }, []);

  return (
    <LineChartComponent
      data={chartData}
      handleStockChange={handleStockChange}
      selectedStock={selectedStock}
      stockOtions={stockOtions}
    />
  );
};

export default LineChartContainer;
