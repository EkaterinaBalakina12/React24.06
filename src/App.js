import logo from './logo.svg';
import './App.css';

import Butn from './components/Butn';
import Butn2 from './components/Butn2';
import Butn3 from './components/Butn3';
import Header from './components/Header';
import Item from './components/Item';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';


function App() {
  return (
      <>
          <Router>
              
          <Container>
              <Row>
                  <Col style={{border: "1px solid black", textAlign:"center"}}>
                      <Header></Header>
                      <Link to="/Item">Back</Link>
                  </Col>
              </Row>
              <Row>
                  <Col style={{border: "1px solid black", textAlign:"center"}}>
                        <Link to="/Butn">Butn</Link>
                  </Col>
                  <Col style={{border: "1px solid black", textAlign:"center"}}>
                        <Link to="/Butn2">Butn2</Link>
                  </Col>
                  <Col style={{border: "1px solid black", textAlign:"center"}}>
                        <Link to="/Butn3">Butn3</Link>
                  </Col>
              </Row>
              <Row>
                   <Col style={{border: "1px solid black", textAlign:"center"}}>
                       
                        <Switch>                           
                            <Route path='/Item' component={Item}></Route>
                            <Route path='/Butn' component={Butn}></Route>
                            <Route path='/Butn2' component={Butn2}></Route>
                            <Route path='/Butn3' component={Butn3}></Route>
                        </Switch>
                   </Col>
              </Row>
          </Container>
              
              
              {/* <ul>
                  <li>
                        <Link to="/Butn">Butn</Link>
                  </li>
                  <li>
                        <Link to="/Butn2">Butn2</Link>
                  </li>
                  <li>
                        <Link to="/Butn3">Butn3</Link>
                  </li>
              </ul> */}

              
          </Router>
              
                   
          {/* <Container>
              <Row>
                  <Col style={{border: "1px solid black", textAlign:"center"}}><Header></Header></Col>
              </Row>
              <Row>
                  <Col style={{border: "1px solid black", textAlign:"center"}}>
                       <Butn></Butn>
                  </Col>
                  <Col style={{border: "1px solid black", textAlign:"center"}}>
                        <Butn2></Butn2>
                  </Col>
                  <Col style={{border: "1px solid black", textAlign:"center"}}>
                        <Butn3></Butn3>
                  </Col>
              </Row>
                   <Col style={{border: "1px solid black", textAlign:"center"}}>
                        <Route path='/Butn' component={Butn}></Route>
                   </Col>
          </Container>          */}
      </>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
