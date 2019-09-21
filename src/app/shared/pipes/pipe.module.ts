import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DeliveredPipe } from "~/app/shared/pipes/delivered/delivered.pipe";
import { LogoPipe } from "~/app/shared/pipes/logo-pipe/logo.pipe";
import { RandomColorPipe } from "~/app/shared/pipes/random-color/random-color.pipe";
import { TypePipe } from "~/app/shared/pipes/type/type.pipe";
import { IconStatusPipe } from "./icon-status/icon-status.pipe";
import { BreakPipe } from "./new-line/break.directive";
import { TodatePipe } from "./to-date/todate.pipe";

@NgModule({
    declarations: [
        RandomColorPipe,
        DeliveredPipe,
        IconStatusPipe,
        LogoPipe,
        TypePipe,
        TodatePipe,
        BreakPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        RandomColorPipe,
        DeliveredPipe,
        IconStatusPipe,
        LogoPipe,
        TypePipe,
        TodatePipe,
        BreakPipe
    ]
})
export class PipeModule {
}
