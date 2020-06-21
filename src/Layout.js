import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import upArrow from './images/up-arrow.svg';
import downArrow from './images/down-arrow.svg';
import shoppingCart from './images/shopping-cart.svg';
import rent from './images/rent.svg';
import './layout.css';
import { requestApiData } from "./actions";

class Layout extends React.Component {
  // componentDidMount() {
  //   this.props.requestApiData();
  // }

  render() {
    const { results = [] } = this.props.data;
    return (
      <div className="parentDiv">
        <div className="flex-container">
          <div className="titleBar">
            <div className="title">Expenses</div>
          </div>
          <div className="titleBar">fklajsdflkasnflkjasdf</div>
        </div>
        <div className="content">
          <div className="flex-container">
            <div className="balance">
              <div className="title">
                Card Balance
            </div>
              <div className="balanceAmount">
                $6,390
            </div>
            </div>
            <div className="balance">
              <div className="trend">
                <div className="positive">
                  <img className="trendIcon" alt="arrow" src={upArrow} />
                  <span className="amount">$3,214</span>
                </div>
                <div className="negative">
                  <img className="trendIcon" alt="arrow" src={downArrow} />
                  <span className="amount">$1,168</span>
                </div>
              </div>
            </div>
          </div>
          <section id="spendingBreakdown" className="spendingBreakdown">
            <div className="title">
              Spending Breakdown
          </div>
            <div className="data">
              <div className="content">
                <div style={{ flexGrow: 0.5 }}>
                  <img style={{ backgroundColor: '#ff7e87' }} className="contentIcon" src={shoppingCart} alt="shoppingCart" />
                </div>
                <div className="label">
                  Shopping
                <div className="date">17 Monday January</div>
                </div>
                <div className="amount">
                  - $279.90
              </div>
              </div>
            </div>
            <div className="data">
              <div className="content">
                <div style={{ flexGrow: 0.5 }}>
                  <img style={{ backgroundColor: '#00d793' }} className="contentIcon" src={rent} alt="shoppingCart" />
                </div>
                <div className="label">
                  Shell
                <div className="date">17 Monday January</div>
                </div>
                <div className="amount">
                  - $35.90
              </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
