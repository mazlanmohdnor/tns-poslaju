import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "deliveredPipe"
})
export class DeliveredPipe implements PipeTransform {
    
    transform(value: string): boolean {
        if (!value) {
            return;
        }
        
        if (value.toLowerCase().indexOf("item delivered") !== -1
            || value.toLowerCase().indexOf("successfully delivered") !== -1
            || value.toLowerCase().indexOf("delivered") !== -1) {
            return true;
        }
    }
    
}
