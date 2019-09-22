import { ModuleWithProviders, NgModule } from "@angular/core";
import { PosLajuService } from "~/app/shared/services/pos-backend/pos-laju.service";
// import { DataProcessService } from "~/app/shared/services/data-process/data-process.service";

const PROVIDERS = [
    // ThemeSwitcherService,
    PosLajuService
    // DataStorageService,
    // AppRoutingPreloaderService,
    // Log,
    // AppResolverService,
    // LangService,
    // FirebaseService,
    // DataProcessService
    // AuthService,
    // DhlService
];

@NgModule({
    imports: [],
    declarations: [],
    exports: [],
    providers: []
})
export class ServicesModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ServicesModule,
            providers: PROVIDERS
        };
    }
}
