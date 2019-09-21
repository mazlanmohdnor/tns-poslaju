import { Pipe, PipeTransform } from "@angular/core";
import { PosType } from "~/app/constants/pos.type";

@Pipe({
    name: "typePipe"
})
export class TypePipe implements PipeTransform {
    
    transform(type: PosType): string {
        if (type) {
            switch (type) {
                case "poslaju":
                    return "Pos Laju";
                case "skynet":
                    return "Sky Net Express";
                case "ninjavan":
                    return "Ninja Van";
                case "lex":
                    return "Lazada Express";
                case "jnt":
                    return "J&T Express";
                case "gdex":
                    return "GDEX";
                case "citylink":
                    return "City Link";
            }
        }
    }
    
}
