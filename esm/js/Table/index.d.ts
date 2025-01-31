import Control, { ControlProps } from '../Control';
import TableCell from './TableCell';
import { ActionFlag } from '../../react/Table';
import '../../css/Table.css';
declare type TableColumnJS = {
    header?: string;
    cell: () => TableCell;
};
declare type DispatchParams = {
    type: string;
    data?: object[];
    rowIndex: number;
    fieldName?: string;
};
declare type HandlerFunction = (eventOptions: DispatchParams) => void | object;
declare type TableProps = ControlProps & {
    data: object[];
    defaultRowData: object;
    columns: (TableColumnJS | ActionFlag)[];
    actionButtonsShown?: boolean;
    onRowAdd?: HandlerFunction;
    onRowRemove?: HandlerFunction;
    onCellChange?: HandlerFunction;
};
export default class Table extends Control {
    protected _props: TableProps;
    private _tableHeaderContainer;
    private _tableBodyContainer;
    constructor(params: TableProps);
    private _addRow;
    private _removeRow;
    private _triggerChange;
    private _renderCells;
    private _isObject;
    private _mergeDeep;
    private _validateRequired;
    private _renderTableContainer;
    private _renderTableHeadersContainer;
    private _renderTableHeaders;
    private _renderTableBodyContainer;
    private _renderTableCellActions;
    private _dispatch;
    private _renderTableRows;
    updateRowData(rowIndex: number, data: object[], rerender: boolean | undefined, trigger: boolean | undefined, fieldName: string): void;
    render(): HTMLElement;
    showActionButtons(): void;
    hideActionButtons(): void;
    getValue(): object[];
    setValue(data: object[]): void;
    on(eventName: string, callback: HandlerFunction): void;
}
export {};
