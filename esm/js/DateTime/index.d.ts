import Control, { ControlProps } from '../Control';
import '../../css/DateTime.css';
import '../../css/Text.css';
declare type DateTimeProps = ControlProps & {
    value?: Date | null;
    type?: string;
    locale?: string;
    dateFormat?: string;
    timeFormat?: string;
    onChange?: (date: Date) => void;
};
declare class DateTime extends Control {
    protected _props: DateTimeProps;
    protected element: HTMLElement;
    private _textInputsContainer;
    private _dateTextInput;
    private _timeTextInput;
    private _dateErrorDiv;
    private _calendar;
    private _locale;
    private _timePicker;
    private _time;
    constructor(params?: DateTimeProps);
    render(): HTMLElement;
    rerender(changedAttr: string[]): void;
    private _renderContainer;
    private _renderTextInputsContainer;
    private _renderDateInputErrorLabel;
    private _renderDateTextInput;
    private _renderTimeTextInput;
    private _registerTimeTextInputEvents;
    private _changeMinutesBy;
    private _changeHoursBy;
    private _renderDate;
    private _renderTime;
    private _renderDateTime;
    private _checkDateInputError;
    private _onClickOutside;
    private _onCalendarDateClick;
    private _onTimeClick;
    getValue(): Date | undefined;
    setValue(date_opt: any): void;
    getLocale(): string;
    setLocale(locale: any): void;
}
export default DateTime;
