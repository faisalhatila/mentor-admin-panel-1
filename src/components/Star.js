import React, { Component } from "react";

import StarRatings from "react-star-ratings";

class Star extends Component {
  state = {
    rating: 0,
  };

  render() {
    const changeRating = (newRating, name) => {
      this.setState({
        rating: newRating,
      });
    };
    // rating = 2;
    return (
      <StarRatings
        rating={this.state.rating}
        starRatedColor="#363090"
        changeRating={changeRating}
        numberOfStars={5}
        name="rating"
        starDimension="20px"
        starSpacing="0px"
      />
    );
  }
}
export default Star;
