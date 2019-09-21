import { ModuleWithProviders, NgModule } from "@angular/core";
import { AppRoutingPreloaderService } from "~/app/shared/services/app-routing-preloader/app-routing-preloader.service";
import { DataProcessService } from "~/app/shared/services/data-process/data-process.service";
import { ThemeSwitcherService } from "~/app/shared/services/theme/theme-switcher.service";

const PROVIDERS = [
    ThemeSwitcherService,
    // PosLajuService,
    // DataStorageService,
    AppRoutingPreloaderService,
    Log,
    // AppResolverService,
    // LangService,
    // FirebaseService,
    DataProcessService
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
            ngModule: ServicesModule
            // providers: PROVIDERS
        };
    }
}
