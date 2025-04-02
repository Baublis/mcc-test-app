import {NodeModel} from "../../../Models/Node/NodeModel.ts";

export interface NodeStoreState {
    nodes: NodeModel[];
    node: NodeModel | null;
}