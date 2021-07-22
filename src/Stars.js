import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StarRating from 'react-native-star-rating';

export default class Stars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalStarCount: 3.5,
      customStarCount: 2.5,
    };
  }

  onGeneralStarRatingPress(rating) {
    this.setState({
      generalStarCount: rating,
    });
  }

  onCustomStarRatingPress(rating) {
    this.setState({
      customStarCount: rating,
    });
  }

  render() {
    return (
        <StarRating
          disabled={false}
          maxStars={5}
          rating={this.state.generalStarCount}
          starSize={30}
          selectedStar={rating => this.onGeneralStarRatingPress(rating)}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  star: {
    paddingHorizontal: 6,
    opacity: 0,
  },
});