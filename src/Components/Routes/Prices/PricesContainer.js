import React from "react";
import PricesPresenter from "./PricesPresenter";
import { pricesApi } from "../../../api.js";

export default class extends React.Component {
  state = {
    tickersAll: null,
    error: null,
    loading: true,
  };

  getPrices = async () => {
    try {
      const { data: prices } = await pricesApi.tickersAll();
      this.setState({ prices });
    } catch (error) {
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidMount() {
    this.getPrices();
  }

  render() {
    return <PricesPresenter {...this.state} />;
  }
}
