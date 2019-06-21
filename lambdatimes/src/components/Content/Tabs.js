import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  console.log(props.tabs)
  return (
    <div className='tabList'>
      <div>{props.tabs.map(tab => <Tab key={tab} tab={tab} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} />)}</div>
    </div>
  )
};

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired
};

export default Tabs;