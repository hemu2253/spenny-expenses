import React from 'react';
import logoutIcon from '../../images/logout.svg';

export default props => (
  <div className="flex-container">
    <div className="titleBar">
      <div className="title">Expenses</div>
    </div>
    <div className="titleBar">
      <img className="lotoutBtn" src={logoutIcon} alt="logout" />
    </div>
  </div>
)