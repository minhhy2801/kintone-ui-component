import Control, { ControlProps } from '../Control';
import '../../css/Label.css';
declare type LabelProps = ControlProps & {
    text?: string;
    isRequired?: boolean;
    textColor?: string;
    backgroundColor?: string;
};
declare class Label extends Control {
    protected _props: LabelProps;
    private textEl;
    private requiredEl;
    private containerEl;
    constructor(params: LabelProps);
    private _createLabelLayout;
    rerender(changedAttr?: string[]): void;
    setText(text: string): void;
    setRequired(isRequired: boolean): void;
    setTextColor(color: string): void;
    setBackgroundColor(color: string): void;
}
export default Label;
