import {Draft, PayloadAction} from "@reduxjs/toolkit";
import {NodeStoreState} from "./Models.ts";

export default {
    addNode: (state: Draft<NodeStoreState>, action: PayloadAction<NodeStoreState['node']>) => {
        if (action.payload != null)
            state.nodes = [...state.nodes, action.payload];
    },
    removeNode: (state: Draft<NodeStoreState>, action: PayloadAction<NodeStoreState['node']>) => {
        if (action.payload != null)
        {
            const nodes = state.nodes.filter((ae) => ae.id !== action.payload?.id);
            state.nodes = [...nodes]
        }
    },
    removeAllNodes: (state: Draft<NodeStoreState>) => {
        state.nodes = []
    }
}