export class NodeModel {
    id: number;
    parentId: number | null;
    level: number;
    label: string;
    selected: boolean;

    constructor(
        id: number,
        parentId: number | null,
        level: number,
        label: string,
        selected: boolean,
    ) {
        this.id = id;
        this.parentId = parentId;
        this.level = level;
        this.label = label;
        this.selected = selected;
    }
}