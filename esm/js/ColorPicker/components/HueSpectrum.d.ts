import Control, { ControlProps } from '../../Control';
declare type RGB = {
    r: number;
    g: number;
    b: number;
};
declare type HueSpectrumProps = ControlProps & {
    width: number;
    height: number;
    onSelect: (rgbObj: RGB) => void;
};
declare class HueSpectrum extends Control {
    protected _props: HueSpectrumProps;
    private colorCanvas;
    private containerEl;
    private isMouseDown;
    private hasInitLayout;
    constructor(params: HueSpectrumProps);
    initLayout(): void;
    initContainerEl(): void;
    handleMouseLeave(): void;
    handleMouseMove(e: MouseEvent): void;
    handleMouseDown(): void;
    handleMouseUp(e: MouseEvent): void;
    triggerSelect(clientY: number): void;
}
export { HueSpectrumProps, RGB };
export default HueSpectrum;
