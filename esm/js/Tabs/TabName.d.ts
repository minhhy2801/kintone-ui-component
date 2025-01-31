import Control, { ControlProps } from "../Control";
declare type TabNameProps = ControlProps & {
    isActive: boolean;
    tabName: string;
    tabIndex: number;
    onClickTabItem: (tabIndex: number) => void;
};
declare class TabName extends Control {
    protected _props: TabNameProps;
    constructor(params: TabNameProps);
    rerender(changedAttr?: Array<string>): void;
    select(): void;
    deselect(): void;
}
export default TabName;
