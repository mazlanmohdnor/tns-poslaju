import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "iconStatusPipe"
})
export class IconStatusPipe implements PipeTransform {
    
    transform(value: any): string {
        if (value) {
            if (value.toLowerCase().indexOf("item posted over the counter") !== -1) {
                return "mail-unread";
            } else if (value.toLowerCase().indexOf("item out fot delivery") !== -1) {
                return "bicycle";
            } else if (value.toLowerCase().indexOf("item picked up") !== -1) {
                return "cloud-upload";
            } else if (value.toLowerCase().indexOf("dispatch out") !== -1) {
                return "git-branch";
            } else if (value.toLowerCase().indexOf("arrive at delivery facility") !== -1) {
                return "business";
            } else if (value.toLowerCase().indexOf("delivery attempted") !== -1) {
                return "lock";
            } else if (value.toLowerCase().indexOf("unsuccessful delivery") !== -1) {
                return "close";
            } else if (value.toLowerCase().indexOf("processed") !== -1) {
                return "refresh";
            } else if (value.toLowerCase().indexOf("item delivered") !== -1) {
                return "checkmark-circle";
            } else if (value.toLowerCase().indexOf("successfully delivered") !== -1) {
                return "checkmark-circle";
            } else if (value.toLowerCase().indexOf("item can be collected") !== -1) {
                return "business";
            } else {
                return "car";
            }
        }
    }
    
}
