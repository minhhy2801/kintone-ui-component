import Control, { ControlProps } from '../../Control';
declare type SaturationSpectrumProps = ControlProps & {
    width: number;
    height: number;
    rgb: {
        r: number;
        g: number;
        b: number;
    };
    onSelect: (rgb: {
        r: number;
        g: number;
        b: number;
    }, triggerOnChange: boolean) => void;
};
declare class SaturationSpectrum extends Control {
    protected _props: SaturationSpectrumProps;
    private colorCanvas;
    private containerEl;
    private isMouseDown;
    constructor(params: SaturationSpectrumProps);
    rerender(changedAttr?: Array<string>): void;
    setRGB(rgb: {
        r: number;
        g: number;
        b: number;
    }): void;
    initContainerEl(): void;
    fillSatSpectrumCanvas(): void;
    handleMouseLeave(): void;
    triggerSelect(clientX: number, clientY: number, triggerOnChange: boolean): void;
    handleMouseMove(e: MouseEvent): void;
    handleMouseDown(): void;
    handleMouseUp(e: MouseEvent): void;
}
export { SaturationSpectrumProps };
export default SaturationSpectrum;
