export class NodeModel {
    id: number;
    parent: NodeModel | null;
    label: string;
    level: number;
    childNodes: NodeModel[] | null;

    constructor(
        id: number,
        label: string,
        parent: NodeModel | null,
    ) {
        this.id = id;
        this.label = label;
        this.parent = parent;
        this.level = parent === null
            ? 0
            : parent.level + 1;
        this.childNodes = [];
    }
}