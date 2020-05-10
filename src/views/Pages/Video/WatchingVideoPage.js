import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col,  Row } from 'reactstrap';
import ReactPlayer from 'react-player';
import classNames from "classnames";
import ReactDOM from "react-dom";
import './WatchingVideo.scss';

class WatchingVideo extends Component {
  render() {
    return (

      <div className="content-watching">
        <div className="">

          <div className="">
              <Row style = {{background: 'white'}}>
                    <Col  lg="8">
                      <div className='player-wrapper' style={{background: 'black'}}>
                       <ReactPlayer
                          className='react-player'
                          url='https://v16.muscdn.com/dea20fbefc2ee376102146bd9aca3014/5eb87a3c/video/tos/useast2a/tos-useast2a-ve-0068c003/9dcc5d3e035e4695b54c8bd0cd0e2283/?a=1233&br=3744&bt=1872&cr=0&cs=0&dr=0&ds=3&er=&l=20200510160330010189074012381AD53E&lr=tiktok_m&qs=0&rc=anQ8aW1meW1tczMzNzczM0ApNmZpOjc0NDxpN2k0MzlnZmdfYzI0a2BjaW5fLS1eMTZzc2E0MDFjMjBeLzI2MTReXi46Yw%3D%3D&vl=&vr='
                          controls={true}
                          width ='100%'
                          height = '100%'
                        />
                      </div>
                    </Col>
                    <Col  lg="4">
                      <h2>dm video</h2>

                    </Col>
                  </Row>

          </div>
        </div>

        </div>
    );
  }
}

export default WatchingVideo;
