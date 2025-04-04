import React from "react";

export class NodeModel {
    id: number;
    parent: NodeModel | null;
    label: string;
    input: React.ReactNode;
    level: number;
    childNodes: NodeModel[];

    constructor(
        id: number,
        label: string,
        parent: NodeModel | null,
        input: React.ReactNode
    ) {
        this.id = id;
        this.label = label;
        this.parent = parent;
        this.level = parent === null
            ? 0
            : parent.level + 1;
        this.childNodes = [];
        this.input = input;
    }
}