export class NodeModel {
    id: number;
    parentId: number | null;
    level: number;
    label: string;

    constructor(
        id: number,
        parentId: number | null,
        level: number,
        label: string,
    ) {
        this.id = id;
        this.parentId = parentId;
        this.level = level;
        this.label = label;
    }
}