import React from "react";
import CoinsPresenter from "./CoinsPresenter";
import { coinsApi } from "../../../api";

export default class extends React.Component {
  state = {
    coinsList: null,
    getCoinId: null,
    error: null,
    loading: true,
  };

  getCoinsList = async () => {
    try {
      const { data: coinsList } = await coinsApi.coinsList();
      this.setState({ coinsList });
    } catch (error) {
    } finally {
      this.setState({ loading: false });
    }
  };
  componentDidMount() {
    this.getCoinsList();
  }

  render() {
    return <CoinsPresenter {...this.state} />;
  }
}
