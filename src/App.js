import React, {Component} from 'react';
import './App.css';
import styled from 'styled-components';
import NewComponent from "./newComponent"
import QuoteContainer from "./QuoteContainer";
import CSSTransition from "react-transition-group/CSSTransition";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: this.randomColor(),
    }
  }


  randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color
  }

  setRandomColor() {
    this.setState({backgroundColor: this.randomColor()})
  }

  render() {
    const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${this.state.backgroundColor};
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -10;
    transition: all 500ms ease;
`;
    return (
      <div className="App">
        <CSSTransition
          timeout={500}
        >
          <StyledDiv>
            <QuoteContainer
              color={this.state.backgroundColor}
              setRandomColor={this.setRandomColor.bind(this)}/>
          </StyledDiv>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
