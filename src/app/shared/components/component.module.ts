import { NgModule } from "@angular/core";
import { HeaderComponent } from "~/app/shared/components/header/header.component";
import { ListCardComponent } from "~/app/shared/components/list-card/list-card.component";
import { ListDetailComponent } from "~/app/shared/components/list-detail/list-detail.component";
import { RingComponent } from "~/app/shared/components/ring/ring.component";
import { StepComponent } from "~/app/shared/components/step/step.component";
import { PipeModule } from "~/app/shared/pipes/pipe.module";

const DECLARATIONS = [
    ListDetailComponent,
    RingComponent,
    HeaderComponent,
    ListCardComponent,
    StepComponent
];

@NgModule({
    declarations: DECLARATIONS,
    imports: [
        PipeModule
        // TranslateModule
    ],
    exports: DECLARATIONS
})
export class ComponentModule {
}
