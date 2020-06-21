import React from 'react';
import upArrow from '../../images/up-arrow.svg';
import downArrow from '../../images/down-arrow.svg';
import './style.css'

export default props => (
  <section className="cardBalance">
    <div className="flex-container">
      <div className="balance">
        <div className="title">
          Card Balance
        </div>
        <div className="balanceAmount">
          ${props.expensesData.cardBalance.toLocaleString('en-in')}
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
  </section>
)