import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "toDate"
})
export class TodatePipe implements PipeTransform {
    
    transform(value: any): any {
        return value && value.toDate();
    }
    
}
