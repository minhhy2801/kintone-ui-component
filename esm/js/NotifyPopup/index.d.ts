import Control, { ControlProps } from '../Control';
import '../../css/NotifyPopup.css';
declare type PopupProps = ControlProps & {
    text?: string;
    type?: string;
};
declare class NotifyPopup extends Control {
    protected _props: PopupProps;
    private textEl;
    private closeButton;
    private _onClick;
    constructor(params: PopupProps);
    private _getStyleByType;
    private _createPopupLayout;
    on(eventName: string, callback: (params?: any) => void): void;
    private _getClassName;
    rerender(changedAttr?: string[]): void;
    setText(text: string): void;
    setType(type: string): void;
    disable(): void;
    enable(): void;
}
export default NotifyPopup;
