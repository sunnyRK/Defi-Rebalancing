import { iSelectedNetwork } from "../../../store/TradeStore";

export type tTrade = {
    generateAbis: () => void,
    handleContractAddress: (_contractIndex: string, _contractDetail: any) => void,
    onChangeTokenIn: (tokenIn: any) => void,
    onChangeFunctions: (funcIndex: any) => void,
    simulate: (funcIndex: any) => void,
    resetField: () => void,
    handleSelectFromNetwork: (_fromNetwork: iSelectedNetwork) => void,
    handleSelectToNetwork: (_toNetwork: iSelectedNetwork) => void,
    onChangeFromProtocol: (_fromProtocol: string) => void,
    onChangeFromToken: (_fromToken: string) => void,
    onChangeToProtocol: (_toProtocol: string) => void,
    onChangeToToken: (_toToken: string) => void,
    onChangeAmountIn: (_amountIn: string) => void,
    handleSwap: () => void,
    addBatch: () => void,
    removeBatch: (index: number) => void,
    clearSelectedBatchData: () => void,
    updateInputValues: (index: number, txHash: string[], data: any, simulation: any) => void,
    toggleShowBatchList: (id: number) => void,
    sendSingleBatchToList: (isSCW: any) => void,
    ExecuteAllBatches: (isSCW: any) => void,
    closeFromSelectionMenu: () => void,
    closeToSelectionMenu: () => void,
};
