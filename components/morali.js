import React from "react";
import { useMoralisWeb3Api } from "react-moralis";

const Web3Api = useMoralisWeb3Api();

const fetchTransactions = async () => {
  // get mainnet transactions for the current user
  const transactions = await Web3Api.account.getTransactions();
  console.log(transactions);

  // get BSC transactions for a given address
  // with most recent transactions appearing first
  const options = {
    chain: "bsc",
    address: "0x3d6c0e79a1239df0039ec16Cc80f7A343b6C530e",
    order: "desc",
    from_block: "0",
  };
  const bscTransactions = await Web3Api.account.getTransactions(options);
  console.log(bscTransactions);
};
