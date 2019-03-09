import React from "react";
import styled from 'styled-components';


const QUOTE = [{text: "Don't cry because it's over, smile because it happened.", author: "Dr. Seuss"},
  {
    text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
    author: "Marilyn Monroe"
  }
];

class QuoteContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: {},
      backgroundColor: "",
    }
  }

  componentDidMount() {
    const currentQuote = QUOTE[Math.floor(Math.random() * 2)];
    this.setState({currentQuote})
  }

  nextQuote() {
    const currentQuote = QUOTE[Math.floor(Math.random() * 2)];
    this.setState({currentQuote});
    this.props.setRandomColor()
  }

  render() {
    const StyledQuoteWrapper = styled.div`
    display: block;
    max-height: 65%;
    max-width: 65%;
    min-width: 30%;
    min-height: 30%;
    background-color: RGB(255,255,255);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: ${this.props.color};
    padding: 15px 30px 15px 30px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    transition: all 500ms ease;
    border-radius: 5px;
    
`;
    const StyledAuthor = styled.div`
      text-align: right;
      font-family: 'Raleway', sans-serif;
      font-weight: 400;
      margin: 10px;
    `;
    const StyledButtonWrapper = styled.div`
      display: flex;
      align-items: center;
      justify-content: flex-end;
    `;
    const StyledButton = styled.button`
    background-color: ${this.props.color};
    border: none;
    color: white;
    border-radius: 4px;
    padding: 7px 10px 7px 10px;
    `;
    const StyledQuote = styled.div`
    font-weight: 500;
    font-size: 1.55em;
    font-family: 'Raleway', sans-serif;
    padding-left: 50px;
    padding-right: 50px;
    `;
    return <StyledQuoteWrapper>
      <div>
        <StyledQuote>
          {this.state.currentQuote.text}
        </StyledQuote>
        <StyledAuthor>
          -{this.state.currentQuote.author}
        </StyledAuthor>

      </div>
      <StyledButtonWrapper>
        <StyledButton onClick={this.nextQuote.bind(this)}>New quote</StyledButton>
      </StyledButtonWrapper>
    </StyledQuoteWrapper>
  }
}

export default QuoteContainer