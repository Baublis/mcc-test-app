import React from "react";

export class NodeModel {
    id: number;
    parent: NodeModel | null;
    label: React.ReactNode;
    level: number;
    childNodes: NodeModel[];

    constructor(
        id: number,
        label: React.ReactNode,
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