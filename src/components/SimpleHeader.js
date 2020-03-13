import React from 'react';
import { Row } from 'simple-flexbox';
import { Typography } from 'antd';
import back from '../images/back.png'
import { withRouter } from 'react-router-dom';
import Fade from '@material-ui/core/Fade';

const Title = Typography.Title;

const rootStyle = {
    height: 100,
}

const backBtnStyle = {
    pointer: 'cursor',
    paddingLeft: 100,
    paddingTop: 35,
    position: 'absolute',
    cursor: 'pointer'
}

const backImageStyle = {
    width: 60,
    height: 60,
}

class SimpleHeader extends React.Component {

    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this); 
     }
     
     goBack(){
         this.props.history.goBack();
     }

   render() {
    return (
      <Row flexGrow={1} style={rootStyle}>
        <Fade in={true} timeout={1000}>
          <div style={backBtnStyle} onClick={this.goBack}>
            <img style={backImageStyle} src={back} alt="Go back" />
          </div>
        </Fade>

        <Fade in={true} timeout={1000}>
          <Title
            level={1}
            style={{ fontWeight: 600, margin: "auto", marginTop: 40 }}
          >
            Portfolio
          </Title>
        </Fade>
      </Row>
    );
   };
}

export default withRouter(SimpleHeader);