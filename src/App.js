import { Button } from "@material-ui/core";
import React, { createRef } from "react";
import "./App.css";
import { connect } from "react-redux";
import { loginRequest } from "./actions/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.refText = createRef();
    this.state = {
      value: "",
      text: "",
      openClose: false,
    };
  }
  changeTextOne = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  changeTextTwo = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  testMethod = () => {
    this.props.loginRequest("asd");
  };
  hundleOpenClose = (e) => {
    this.setState({
      openClose: !this.state.openClose,
    });
    setTimeout(() => {
      window.scroll({
        left: 0,
        top: e.current.offsetTop,
        behavior: "smooth",
      });
    }, 100);
    console.log(e);
  };
  handleSu;
  render() {
    console.log(this.props, 'fbdfbfd');
    return (
      <div className="main">
        <div className="App">
          <Button
            onClick={(e) => {
              this.hundleOpenClose(this.refText);
            }}
          >
            Click my and look
          </Button>
          <Button onClick={this.testMethod}>asd</Button>
          <form className="form">
            <div className="form__box">
              <input
                onChange={(e) => {
                  this.changeTextOne(e);
                }}
                className="form__input"
                type="text"
                name="one"
                placeholder="Заполни поле"
              />
              <label className="form__label" htmlFor="one">
                Тестим REF
              </label>
            </div>
            <div className="form__box">
              <input
                onChange={(e) => {
                  this.changeTextTwo(e);
                }}
                type="text"
                name="two"
                placeholder="Заполни поле"
                className="form__input"
              />
              <label className="form__label" htmlFor="two">
                Тестим REF
              </label>
            </div>
          </form>
        </div>
        <div
          className={
            this.state.openClose ? "testAnimation" : "testAnimation show"
          }
        >
          <p className="title" ref={this.refText}>
            {this.state.value}
          </p>
          <p className="title">{this.state.text}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {state};
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (value) => dispatch(loginRequest(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
