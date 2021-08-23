import React from "react";
import ExchangesPresenter from "./ExchangesPresenter";
import { exchangesApi } from "../../../api";

export default class extends React.Component {
  state = {
    exchangesList: null,
    error: null,
    loading: true,
  };

  getExchangesList = async () => {
    try {
      const { data: exchangesList } = await exchangesApi.exchangesList();
      this.setState({ exchangesList });
    } catch (error) {
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidMount() {
    this.getExchangesList();
  }

  render() {
    return <ExchangesPresenter {...this.state} />;
  }
}
