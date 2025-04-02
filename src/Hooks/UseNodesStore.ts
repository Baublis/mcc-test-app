import useStore, { nodesSlice as slice} from "./UseAppStore.ts";
import {NodeModel} from "../Models/Node/NodeModel.ts";

const useNodesStore = () => {
    const store = useStore();

    const dispatch = store.useDispatch();

    const nodes = store.useSelector((state) => state.nodes.nodes);

    const addNode = (state: NodeModel) => dispatch(slice.actions.addNode(state));

    const removeNode = (id: number) => {

        const node = nodes.find((a) => a.id === id) ?? null;

        dispatch(slice.actions.removeNode(node));
    }

    const removeAllNodes = () => {
        dispatch(slice.actions.removeAllNodes());
    }

    return {
        state: {
            nodes,
        },
        actions: {
            addNode,
            removeNode,
            removeAllNodes
        }
    }
}

export default useNodesStore;