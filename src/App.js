import React from 'react';

import Chart from "chart.js";
import { Line } from "react-chartjs-2";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bitcoinIcon from '../src/assets/img/icons/bitcoin.png';
import moneroIcon from '../src/assets/img/icons/monero.png';
import dashIcon from '../src/assets/img/icons/dash.png';

import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

import {
  chartOptions,
  parseOptions,
  chartExample1,
  noLegend
} from "../src/variables/charts.js";

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1"
    };
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
  };
  render(){
    const responsive = {
      desktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    };

  return (
    <>
    
    <Container className="mt--7" fluid>
          <Row>
            <Col className="mb-5 mb-xl-0" xl="12">
              <Card className="bg-gradient-white shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col" style={{flexGrow: 'unset'}}>
                      <h6 className="text-black mb-1">
                        Total balance
                      </h6>
                      <h2 className="mb-0" style={{color: '#8B8BBB'}}>$7025.46</h2>
                    </div>
                    <div className="col" style={{flexGrow: 'unset'}}>
                      <h6 className="text-black mb-1">
                        Last week
                      </h6>
                      <h2 className="mb-0" style={{color: '#89B162'}}>+60%</h2>
                    </div>
                    <div className="col" style={{flexGrow: 'unset'}}>
                      <h6 className=" mb-1">
                        All time
                      </h6>
                      <h2 className="text-black mb-0" style={{color: '#89B162'}}>+12%</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart">
                    <Line
                      data={chartExample1[this.state.chartExample1Data]}
                      options={chartExample1.options}
                      getDatasetAtEvent={e => console.log(e)}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Carousel 
            responsive={responsive}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            containerClass="carousel-container"
            arrows={false}
            autoPlay={true}
            infinite={true}
            >
  
            <Col className="mb-5 mt-5" >
              <Card className="shadow">
                <CardHeader className="border-0">
                  <div className="col">
                    <img src={bitcoinIcon} width='30px' height='30px' />
                    <h6 className="text-black ls-1 mb-1">
                      Bitcoin
                    </h6>
                    <h2 className="mb-0" style={{color: '#98B685'}}>+1.62%</h2>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="chart-very-sm">
                      <Line
                        data={chartExample1["data3"]}
                        options={noLegend}
                        getDatasetAtEvent={e => console.log(e)}
                        backgroundC
                      />
                  </div>
                </CardBody>
                
              </Card>
            </Col>
            <Col className="mb-5 mt-5" >
              <Card className="shadow">
                <CardHeader className="border-0">
                 <div className="col">
                  <img src={moneroIcon} width='30px' height='30px' />
                    <h6 className="text-black ls-1 mb-1">
                      Monero
                    </h6>
                    <h2 className="mb-0" style={{color: '#98B685'}}>+0.01%</h2>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="chart-very-sm">
                        <Line
                          data={chartExample1["data4"]}
                          options={noLegend}
                          getDatasetAtEvent={e => console.log(e)}
                        />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="mb-5 mt-5" >
              <Card className="shadow">
                <CardHeader className="border-0">
                  <div className="col">
                   <img src={dashIcon} width='30px' height='30px' />
                    <h6 className="text-black ls-1 mb-1">
                      Dash
                    </h6>
                    <h2 className="mb-0" style={{color: '#7F4D57'}}>-0.85%</h2>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="chart-very-sm">
                      <Line
                        data={chartExample1["data5"]}
                        options={noLegend}
                        getDatasetAtEvent={e => console.log(e)}
                      />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="mb-5 mt-5">
              <Card className="shadow">
              <CardHeader className="border-0">
                  <div className="col">
                   <img src={dashIcon} width='30px' height='30px' />
                    <h6 className="text-black ls-1 mb-1">
                      Dash 3
                    </h6>
                    <h2 className="mb-0" style={{color: '#7F4D57'}}>-0.85%</h2>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="chart-very-sm">
                      <Line
                        data={chartExample1["data5"]}
                        options={noLegend}
                        getDatasetAtEvent={e => console.log(e)}
                      />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="mb-5 mt-5">
              <Card className="shadow">
              <CardHeader className="border-0">
                  <div className="col">
                   <img src={dashIcon} width='30px' height='30px' />
                    <h6 className="text-black ls-1 mb-1">
                      Dash 2
                    </h6>
                    <h2 className="mb-0" style={{color: '#7F4D57'}}>-0.85%</h2>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="chart-very-sm">
                      <Line
                        data={chartExample1["data5"]}
                        options={noLegend}
                        getDatasetAtEvent={e => console.log(e)}
                      />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Carousel>
        </Container>
    </>
  );
}
}

export default App;
