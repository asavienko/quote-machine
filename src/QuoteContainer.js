import React from "react";
import styled from 'styled-components';
import services from "./services.js"
import AuthorWithPopover from "./authorWithPopover";


class QuoteContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: {},
      backgroundColor: "",
      arrOfQuotes: [],
      anchorEl: null,
    };
  }

  componentDidMount() {

    services.getQuotes()
      .then((result) => result.json())
      .then((jsonResult) => {
        const currentQuote = jsonResult.quotes[Math.floor(Math.random() * jsonResult.quotes.length + 1)];
        this.setState({currentQuote, arrOfQuotes: jsonResult.quotes});
      });
  }

  nextQuote() {
    const currentQuote = this.state.arrOfQuotes[Math.floor(Math.random() * this.state.arrOfQuotes.length + 1)];
    this.setState({currentQuote});
    this.props.setRandomColor()
  }

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };
  getWikiLink = () => {
    const link = this.state.currentQuote.author
      && `https://wikipedia.org/wiki/${this.state.currentQuote.author.split(" ").join("_")}`
    window.open(link)
  };

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
      {this.state.currentQuote && <div>
        <StyledQuote>
          {this.state.currentQuote.quote}
        </StyledQuote>
        <AuthorWithPopover
          author = {this.state.currentQuote.author}
          getWikiLink = {this.getWikiLink.bind(this)}
        />
      </div>}
      <StyledButtonWrapper>
        <StyledButton onClick={this.nextQuote.bind(this)}>New quote</StyledButton>
      </StyledButtonWrapper>
    </StyledQuoteWrapper>
  }
}

export default QuoteContainer