import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Loader";
import Price from "../../Price";

const PricesPresenter = ({ loading, prices }) =>
  loading ? (
    <Loader />
  ) : (
    prices.map((price) => <Price key={price.id} {...price} />)
  );

PricesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  prices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      quotes: PropTypes.shape({
        USD: PropTypes.shape({
          price: PropTypes.number.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};

export default PricesPresenter;
