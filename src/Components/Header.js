import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Header = styled.header`
  display: flex;
  align-items: center;
  font-size: 36px;
  margin-bottom: 20px;
`;

const Body = styled.div`
  margin-bottom: 20px;
`;

const List = styled.ul`
  display: flex;
  gap: 15px;
`;

const Item = styled.li`
  background-color: ${(props) =>
    props.current ? "rgba(100, 100, 300, 100)" : "white"};
  color: ${(props) => (props.current ? "white" : "black")};
`;

const SLink = styled(Link)``;

const Main = ({ location: { pathname } }) => (
  <>
    <Header>
      <h1>Coin Explorer</h1>
    </Header>
    <Body>
      <List>
        <Item current={pathname === "/prices"}>
          <SLink to="/prices">Prices</SLink>
        </Item>
        <Item current={pathname === "/exchanges"}>
          <SLink to="/exchanges">Exchanges</SLink>
        </Item>
        <Item current={pathname === "/coins"}>
          <SLink to="/coins">Coins</SLink>
        </Item>
      </List>
    </Body>
  </>
);

export default withRouter(Main);
