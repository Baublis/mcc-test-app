import {createSlice} from "@reduxjs/toolkit";

import {NodeStoreState} from "./Models.ts";
import reducers from "./Reducers.ts";

export const getDefaultState = (): NodeStoreState => {
    return {
        nodes: [],
        node: null,
    };
};

export const createNodesSlice = (initialState: NodeStoreState = getDefaultState()) =>
    createSlice({
        name: 'Nodes Slice',
        initialState,
        reducers,
    });

export const nodesSlice = createNodesSlice();
