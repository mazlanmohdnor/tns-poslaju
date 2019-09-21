import { Pipe, PipeTransform } from "@angular/core";
import { PosType } from "~/app/constants/pos.type";

@Pipe({
    name: "logoPipe"
})
export class LogoPipe implements PipeTransform {
    
    transform(type: PosType): string {
        switch (type) {
            case "poslaju":
                return "../../../assets/logo/pos.png";
            case "skynet":
                return "../../../assets/logo/skynet.png";
            case "ninjavan":
                return "../../../assets/logo/ninjavan.png";
            case "lex":
                return "../../../assets/logo/lex.png";
            case "jnt":
                return "../../../assets/logo/jnt.jpg";
            case "gdex":
                return "../../../assets/logo/gdex.png";
            case "citylink":
                return "../../../assets/logo/citylink.png";
            case "abx":
                return "../../../assets/logo/abx.png";
            case "dhl":
                return "../../../assets/logo/dhl.jpg";
            case "cj":
                return "../../../assets/logo/cj.jpg";
            default:
                return "../../../assets/poslogo.png";
        }
    }
    
}
