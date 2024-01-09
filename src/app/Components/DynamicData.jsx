import { Card, Statistic, Row, Col, Icon, Progress } from 'antd';

const DynamicData = ({ totalSales, topCategory, flopCategory, filteredData }) => {
  const averageSalesPerTransaction = (totalSales / filteredData.length).toFixed(2);
  const highestSales = Math.max(...filteredData.map(item => item.salesAmt)).toFixed(2);
  const lowestSales = Math.min(...filteredData.map(item => item.salesAmt)).toFixed(2);
  const storeSalesData = filteredData.reduce((acc, item) => {
    acc[item.StoreName] = (acc[item.StoreName] || 0) + item.salesAmt;
    return acc;
  }, {});
  const stores = Object.keys(storeSalesData);
  const highestPerformingStore = stores.reduce((top, store) => (storeSalesData[store] > storeSalesData[top] ? store : top), stores[0]);
  const lowestPerformingStore = stores.reduce((top, store) => (storeSalesData[store] < storeSalesData[top] ? store : top), stores[0]);
  return (
    <Card title="Key Highlights" style={{ width: '350%'}}>
      <Row gutter={16} style={{ marginBottom: '20px' }}>
        <Col span={8} style={{marginBottom : '10px'}}>
          <Statistic
            title="Total Sales"
            value={`₹${(totalSales/100000).toFixed(2)}L`}
            prefix={<Icon type="dollar" />}
          />
        </Col>
        <Col span={8} style={{marginBottom : '10px'}}>
          <Statistic
            title="Top Performing Category"
            value={topCategory}
            prefix={<Icon type="bar-chart" />}
          />
        </Col>
        <Col span={8} style={{marginBottom : '10px'}}>
          <Statistic
            title="Least Performing Category"
            value={flopCategory}
            prefix={<Icon type="bar-chart" />}
          />
        </Col>
      </Row>
      <Row gutter={16} style={{ marginBottom: '20px' }}>
        <Col span={8} style={{marginBottom : '10px'}}>
          <Statistic
            title="Average Sales per Transaction"
            value={`₹${averageSalesPerTransaction}`}
            prefix={<Icon type="line-chart" />}
          />
        </Col>
        <Col span={8} style={{ marginBottom: '10px', marginTop: '10px' }}>
          <Statistic
            title="Highest Performing Store"
            value={highestPerformingStore}
            prefix={<Icon type="shop" />}
          />
        </Col>
        <Col span={8} style={{ marginBottom: '10px', marginTop: '10px' }}>
          <Statistic
            title="Lowest Performing Store"
            value={lowestPerformingStore}
            prefix={<Icon type="shop" />}
          />
        </Col>
      </Row>
      {/* Add a simple chart or graph component here */}
    </Card>
  );
};

export default DynamicData;
