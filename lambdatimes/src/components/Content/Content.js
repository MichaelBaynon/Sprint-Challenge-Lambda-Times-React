import React, { Component } from 'react';
import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: [],
      filteredObjects: [],
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData,
    });

  }

  changeSelected = tab => {
    this.setState({
      selected: tab
    })

  };

  filterCards = () => {


    return this.state.selected === 'all' ? this.state.cards : this.state.cards.filter(card => card.tab === this.state.selected)



  };

  render() {
    return (
      <div className="content-container">

        <Tabs selectTabHandler={this.changeSelected} selectedTab={this.state.selected} tabs={this.state.tabs} />

        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
