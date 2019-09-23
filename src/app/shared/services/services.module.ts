import { ModuleWithProviders, NgModule } from "@angular/core";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
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
    imports: [
        NativeScriptHttpClientModule
    ],
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
