import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "randomColor"
})
export class RandomColorPipe implements PipeTransform {
    
    transform(colorList: string[], iconType?: string): string {
        if (iconType) {
            switch (iconType) {
                case "basket":
                    return "#06D6A0";
                case "build":
                    return "#DB76C9";
                case "cafe":
                    return "#228CDB";
                case "cube":
                    return "#ED7D3A";
                case "desktop":
                    return "#8CD867";
                case "mail-open":
                    return "#EF2D56";
                case "shirt":
                    return "#366666";
            }
        } else {
            return colorList[Math.floor(Math.random() * colorList.length)];
        }
    }
    
}
