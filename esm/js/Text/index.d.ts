import Control, { ControlProps } from '../Control';
import '../../css/Text.css';
declare type TextProps = ControlProps & {
    value?: string;
};
declare class Text extends Control {
    protected _props: TextProps;
    constructor(params: TextProps);
    render(): HTMLElement;
    rerender(changedAttr?: string[]): void;
    on(eventName: string, callback: (params?: any) => void): void;
    setValue(value: string): void;
    getValue(): string | undefined;
}
export default Text;
