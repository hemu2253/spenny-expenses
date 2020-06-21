import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import './layout.css';
import { requestApiData } from "./actions";
import ChartView from "./components/ChartView";
import SpendingBreakdown from "./components/SpendingBreakdown";
import CardBalance from "./components/CardBalance";
import Header from "./components/Header";

class Layout extends React.Component {
  async componentDidMount() {
    await this.props.requestApiData();
    this.renderData();
  }

  renderData = () => {
    const { expensesData } = this.props;
    console.log(expensesData)
  }

  render() {
    const { expensesData } = this.props;
    if (Object.keys(expensesData).length > 0) {
      return (
        <div className="parentDiv">
          <Header />

          <div className="content">
            <CardBalance expensesData={expensesData} />
            <ChartView data={expensesData.data} months={expensesData.month} />
            <SpendingBreakdown spendData={expensesData.spending} />
          </div>
        </div>
      );
    }
    return null
  }
}

const mapStateToProps = state => ({ expensesData: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
