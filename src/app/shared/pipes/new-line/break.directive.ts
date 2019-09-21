import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "appBreak"
})
export class BreakPipe implements PipeTransform {
    constructor() { }
    
    transform(value: string) {
        return value.replace(/  /g, "<br>");
    }
}
