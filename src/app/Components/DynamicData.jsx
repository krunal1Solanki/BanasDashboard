import { Card, Statistic, Row, Col, Icon, Progress } from 'antd';
import { FaUser } from 'react-icons/fa'


const DynamicData = ({ totalSales, NOB, Qty, ABV, ASP, selectedStore }) => {
  return (
    <Card title="Key Highlights" style={{ width: '350%',boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', transition: '0.3s', borderRadius: '5px'  }}>
      <Row gutter={16} style={{ marginBottom: '20px' }}>
        <Col span={8} style={{ marginBottom: '10px' }}>
          <Statistic
            title="Store Name"
            value={selectedStore}
          />
        </Col>
        <Col span={8} style={{ marginBottom: '10px' }}>
          <Statistic
            title="Total Sales"
            value={`₹${(totalSales / 100000).toFixed(2)}L`}
            prefix={<Icon type="dollar" />}
            valueStyle={{ textAlign: 'left' }}
          />
        </Col>
        <Col span={8} style={{ marginBottom: '10px' }}>
          <Statistic
            title="NOB"
            value={NOB}
            prefix={<FaUser />}
            valueStyle={{ textAlign: 'left' }}
          />
        </Col>
      </Row>
      <Row gutter={16} style={{ marginBottom: '20px' }}>
        <Col span={8} style={{ marginBottom: '10px' }}>
          <Statistic
            title="ABV"
            value={parseFloat(ABV).toFixed(2)}
          />
        </Col>
        <Col span={8} style={{ marginBottom: '10px' }}>
          <Statistic
            title="ASP"
            value={parseFloat(ASP).toFixed(2)}
          />
        </Col>
        <Col span={8} style={{ marginBottom: '10px' }}>
          <Statistic
            title="Quantity"
            value={Qty}
          />
        </Col>

      </Row>
    </Card>
  );
};

export default DynamicData;
