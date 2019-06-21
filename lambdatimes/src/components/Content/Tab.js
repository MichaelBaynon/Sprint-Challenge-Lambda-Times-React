import React from 'react';
import PropTypes from 'prop-types';
import './tab.css'


const Tab = props => {

  return (

    <div className='tab'
      onClick={() => {
        props.selectTabHandler(props.tab)

      }}
    >
      {props.tab.toUpperCase()}
    </div>

  );


};

Tab.propTypes = {
  tab: PropTypes.array.isRequired
};

export default Tab;
