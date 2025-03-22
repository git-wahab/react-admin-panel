// react-bootstrap
import { Row, Col, Card } from 'react-bootstrap';

// third party
import Chart from 'react-apexcharts';

// project imports
import FlatCard from 'components/Widgets/Statistic/FlatCard';
import ProductCard from 'components/Widgets/Statistic/ProductCard';
import FeedTable from 'components/Widgets/FeedTable';
import ProductTable from 'components/Widgets/ProductTable';
import { SalesCustomerSatisfactionChartData } from './chart/sales-customer-satisfication-chart';
import { SalesAccountChartData } from './chart/sales-account-chart';
import { SalesSupportChartData } from './chart/sales-support-chart';
import { SalesSupportChartData1 } from './chart/sales-support-chart1';
import feedData from 'data/feedData';
import productData from 'data/productTableData';

// -----------------------|| DASHBOARD SALES ||-----------------------//
export default function DashSales() {
  return (
    <>
      <Row>
        <Col sm={4}>
          <ProductCard params={{ variant: 'primary', title: 'Total Orders', primaryText: '15,830', icon: 'local_mall' }} />
        </Col>
        <Col sm={4}>
          <ProductCard params={{ title: 'Total Profit', primaryText: '$1,783', icon: 'card_giftcard' }} />
        </Col>
        <Col sm={4}>
          <ProductCard params={{ variant: 'primary', title: 'Average Price', primaryText: '$6,780', icon: 'monetization_on' }} />
        </Col>
      </Row>
      <Row>
        <Col md={12} xl={8}>
          <Card>
            <Card.Header>
              <h5>Department wise monthly sales report</h5>
            </Card.Header>
            <Card.Body>
              <Chart {...SalesAccountChartData()} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={4}>
          <Card className="flat-card">
            <div className="row-table">
              <Card.Body className="col-sm-6 br">
                <FlatCard params={{ title: 'Customers', iconClass: 'text-primary mb-1', icon: 'group', value: '1000' }} />
              </Card.Body>
              <Card.Body className="col-sm-6 d-none d-md-table-cell d-lg-table-cell d-xl-table-cell card-body br">
                <FlatCard params={{ title: 'Revenue', iconClass: 'text-primary mb-1', icon: 'language', value: '1252' }} />
              </Card.Body>
            </div>
            <div className="row-table">
              <Card.Body className="col-sm-6 d-none d-md-table-cell d-lg-table-cell d-xl-table-cell card-body br">
                <FlatCard params={{ title: 'Downloads', iconClass: 'text-primary mb-1', icon: 'cloud_download', value: '3550' }} />
              </Card.Body>
              <Card.Body className="col-sm-6 card-bod">
                <FlatCard params={{ title: 'Order', iconClass: 'text-primary mb-1', icon: 'shopping_cart', value: '100%' }} />
              </Card.Body>
            </div>
            <div className="row-table">
              <Card.Body className="col-sm-6 br">
                <FlatCard
                  params={{
                    title: 'Returns',
                    iconClass: 'text-primary mb-1',
                    icon: 'swap_horizontal_circle',
                    value: '3550'
                  }}
                />
              </Card.Body>
              <Card.Body className="col-sm-6 card-bod">
                <FlatCard params={{ title: 'Growth', iconClass: 'text-primary mb-1', icon: 'unarchive', value: '600' }} />
              </Card.Body>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
