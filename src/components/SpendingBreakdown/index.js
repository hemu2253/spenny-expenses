import React from 'react';
import shoppingCart from '../../images/shopping-cart.svg';
import rent from '../../images/rent.svg';
import bill from '../../images/bill.svg';
import './style.css';

const spendingIcon = {
  Shopping: {
    icon: shoppingCart,
    backgroundColor: '#ff7e87',
  },
  Bills: {
    icon: bill,
    backgroundColor: '#00d793',
  },
  Rent: {
    icon: rent,
    backgroundColor: '#0eafe6',
  }
}

export default props => (
  <section id="spendingBreakdown" className="spendingBreakdown">
    <div className="title">
      Spending Breakdown
    </div>
    {props.spendData.map(item => {
      const title = Object.keys(item)[0];
      const value = +Object.values(item)[0];
      const date = new Date(+item.date);
      return (
        <div className="data">
          <div className="content">
            <div style={{ flexGrow: 0.5 }}>
              <img
                style={{ backgroundColor: spendingIcon[title].backgroundColor }}
                className="contentIcon"
                src={spendingIcon[title].icon}
                alt="shoppingCart"
              />
            </div>
            <div className="label">
              {title}
              <div className="date">
                {date.toDateString()}
              </div>
            </div>
            <div className="amount">
              - ${value.toLocaleString('en-in')}
            </div>
          </div>
        </div>
      )
    }
    )}
  </section>
)