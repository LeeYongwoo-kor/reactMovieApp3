import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Loader";
import Coin from "../../Coin";

const CoinsPresenter = ({ loading, coinsList }) =>
  loading ? (
    <Loader />
  ) : (
    coinsList
      .filter((coin) => coin.rank !== 0)
      .sort((a, b) => a.rank - b.rank)
      .map((coin) => <Coin key={coin.id} {...coin} />)
  );

CoinsPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  coins: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      rank: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default CoinsPresenter;
