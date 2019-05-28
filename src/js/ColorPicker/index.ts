import Control, {ControlProps} from "../Control";
import ColorPickerStyle from "./ColorPickerStyle";
import {invertColor, isHexString} from './components/utils'
import Picker, {PickerProps} from './components/Picker'
import Message from '../../constant/Message'

type ColorPickerProps = ControlProps & {
    color: string
    onChange: (color: string) => void
}

class ColorPicker extends Control {
    protected _props: ColorPickerProps = {
        ...this._props,
        ...{
            color: '',
            onAccept: (color: string) => {},
            onCancel: (color: string) => {}
        }
    }

    private oldColor: string
    private inputElement: HTMLInputElement
    private Picker: Picker
    private focus: boolean

    constructor(params: ColorPickerProps) {
        super()
        if(params) {
            this._props = {...this._props, ...params}
        }
        this.oldColor = this._props.color
        this.focus = false
        this.element = document.createElement('div')
        this._renderInput()
        this._renderPicker()
    }

    private _renderInput() {
        let inputContainer = document.createElement('div')
        this.element.appendChild(inputContainer)
        this.inputElement = document.createElement('input')
        this.inputElement.value = this._props.color
        this.inputElement.onblur = (e: Event) => {
            this.focus = false
            if (isHexString((<HTMLInputElement>e.target).value)) {
                this._props.color = (<HTMLInputElement>e.target).value
                this.rerender(['color'])
            }
        }
        this.inputElement.onfocus = () => {
            this.focus = true
            this.Picker.setPickerDisplay(true)
        }
        inputContainer.appendChild(this.inputElement)

        let inputStyle = this.getInputStyle()

        Object.assign(this.inputElement.style, inputStyle)
    }

    private _renderPicker() {
        this.Picker = new Picker({
            hexString: this._props.color,
            onAccept: (hexString: string) => {
                this._props.color = hexString
                this.oldColor = hexString
                this.rerender(['color'])
                this._props.onChange && this._props.onChange(this._props.color)
            },
            onCancel: () => {
                this._props.color = this.oldColor
                this.rerender(['color','redraw'])
            },
            onChange: (hexString: string, triggerOnChange: boolean) => {
                this._props.color = hexString
                if (triggerOnChange) {
                    this.rerender(['color','redraw'])
                }
                else {
                    this.rerender(['color'])
                }
            }
        } as PickerProps)
        this.element.appendChild(this.Picker.render())
    }

    rerender(changedAttr?: Array<string>){
        super.rerender()
        if (!changedAttr) return;
        if (changedAttr.indexOf('color') !== -1) {
            this.inputElement.value = this._props.color
            let inputStyle = this.getInputStyle()
            Object.assign(this.inputElement.style, inputStyle)
        }

        if (changedAttr.indexOf('redraw') !== -1) {
            this.Picker.setHexString(this._props.color)
        }
    }

    setColor(hexString: string) {
        if (isHexString(hexString)) {
            this._props.color = hexString
            this.rerender(['color', 'redraw'])
        }
        else {
            throw new Error(Message.colorPicker.INVALID_COLOR)
        }
    }

    getColor(): string {
        return this._props.color
    }

    getInputStyle() {
        let style = {
            backgroundColor: this._props.color,
            color: invertColor(this._props.color)
        };

        style = { ...style, ...ColorPickerStyle.input };

        if (this.focus) {
            style = { ...style, ...ColorPickerStyle.inputFocus };
        }
        return style;
    }
}

export default ColorPicker