import { Rgba, Hsla, Hsva } from './classes';
export declare class ColorPickerService {
    constructor();
    hsla2hsva(hsla: Hsla): {
        h: number;
        s: number;
        v: number;
        a: number;
    };
    hsva2hsla(hsva: Hsva): Hsla;
    rgbaToHsva(rgba: Rgba): Hsva;
    hsvaToRgba(hsva: Hsva): Rgba;
    stringToHsva(colorString: any): any;
    outputFormat(hsva: Hsva, outputFormat: string): string;
    hexText(rgba: Rgba): string;
    denormalizeRGBA(rgba: Rgba): Rgba;
}
