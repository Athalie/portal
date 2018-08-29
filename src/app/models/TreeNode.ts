export class TreeNode {
  data: object = null;
  parent: object = null;
  children: object[] = [];
  hasChildren: boolean = false;

  constructor(node: object, parent: object, hasChildren: boolean) {
    this.data = node;
    this.parent = parent;
    this.hasChildren = hasChildren;
  }
}
