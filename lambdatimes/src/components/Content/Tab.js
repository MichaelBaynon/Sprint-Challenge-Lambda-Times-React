import React from 'react';
import PropTypes from 'prop-types';


const Tab = props => {

  return (
    <div
      className={''}
      onClick={() => {
        props.selectTabHandler(props.tab)
        //         /* Replace this dummy click handler function with your selectTabHandler function from props 
        //          you'll need to pass the `tab` in as an argument to this handler. */
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );


};

Tab.propTypes = {
  tab: PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string,
  })
};


/* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
    if they match, the className should be: 'tab active-tab', 
    if it is not it should just be 'tab'*/


// Make sure you include PropTypes on your props.

Tab.propTypes = {
  tab: PropTypes.array.isRequired
};

export default Tab;