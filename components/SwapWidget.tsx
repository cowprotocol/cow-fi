import React, { useState } from 'react';
import styled from 'styled-components';

type TabProps = {
  active: boolean;
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
`;

const Tab = styled.div<TabProps>`
  cursor: pointer;
  padding: 10px;
  background-color: ${({ active }) => active ? 'green' : 'grey'};
  color: white;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const Dropdown = styled.select`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
`;

export const SwapWidget = ({ tokenSymbol, tokenImage }) => {
  const [activeTab, setActiveTab] = useState('Buy');
  const [network, setNetwork] = useState('Ethereum');
  const [amount, setAmount] = useState(0);

  const onSwap = () => {
    const networkId = network === 'Gnosis Chain' ? 100 : 1;
    const url = `https://swap.cow.fi/#/${networkId}/swap/WETH/?${activeTab.toLowerCase()}Amount=${amount}`;
    window.open(url, '_blank');
  };

  return (
    <Wrapper>
      <TabContainer>
        <Tab onClick={() => setActiveTab('Buy')} active={activeTab === 'Buy'}>Buy</Tab>
        <Tab onClick={() => setActiveTab('Sell')} active={activeTab === 'Sell'}>Sell</Tab>
      </TabContainer>

      <Dropdown value={network} onChange={e => setNetwork(e.target.value)}>
        <option value="Ethereum">Ethereum</option>
        <option value="Gnosis Chain">Gnosis Chain</option>
      </Dropdown>

      <label>
        Receive
        <Input type="number" value={amount} onChange={e => setAmount(parseFloat(e.target.value))} placeholder="0.0" />
      </label>
      <img src={tokenImage} alt={tokenSymbol} />
      <span>{tokenSymbol}</span>

      <Button onClick={onSwap}>SWAP</Button>
    </Wrapper>
  );
};
