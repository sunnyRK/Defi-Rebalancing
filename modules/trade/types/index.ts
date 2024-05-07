import { iSelectedNetwork } from "../../../store/TradingStore";

export type tTrade = {
    handleSelectFromNetwork: (_fromNetwork: iSelectedNetwork) => void;
    handleSelectToNetwork: (_toNetwork: iSelectedNetwork) => void;
    onChangeFromProtocol: (_fromProtocol: string) => void;
    onChangeFromToken: (_fromToken: string) => void;
    onChangeToProtocol: (_toProtocol: string) => void;
    onChangeToToken: (_toToken: string) => void;
    onChangeAmountIn: (_amountIn: string) => void;
    handleSwap: () => void;
    removeBatch: (index: number) => void;
    clearSelectedBatchData: () => void;
    toggleShowBatchList: (id: number) => void;
    sendSingleBatchToList: (isSCW: any) => void;
    handleExecuteMethod: () => void;
    ExecuteAllBatches: (isSCW: any, whichProvider: string) => void;
    buildRebalance: () => void;
    closeFromSelectionMenu: () => void;
    closeToSelectionMenu: () => void;
    createSession: () => void;
    erc20Transfer: () => void;
    processRebalancing: () => void;
    handleSelectedTokenAddress: (_tokenAddress: string) => void;
    oraclePrice: number;
    oraclePriceLoading: boolean;
};

export type tBatchSelectionSection = {
    handleSwap: () => void;
    onChangeAmountIn: (_amountIn: string) => void;
    sendSingleBatchToList: (isSCW: any) => void;
    handleExecuteMethod: () => void;
    processRebalancing: () => void;
    oraclePrice: number;
    oraclePriceLoading: boolean;
};

export type tBatchListSection = {
    removeBatch: (index: number) => void;
    toggleShowBatchList: (id: number) => void;
};

export type tTradeProtocol = {
    name: string;
    icon: any;
    tokenList: any;
    tokenAddresses: any;
};

export interface iTokenInfo {
    chainId: number;
    address: string;
    name: string;
    symbol: string;
    decimals: number;
    logoURI: string;
    extensions?: Record<string, { tokenAddress: string }>;
}

export interface iTokenList {
    name: string;
    timestamp: string;
    version: {
        major: number;
        minor: number;
        patch: number;
    };
    tags: Record<string, any>;
    logoURI: string;
    keywords: string[];
    tokens: iTokenInfo[];
}
