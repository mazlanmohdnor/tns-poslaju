import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, timer } from "rxjs";
import { of } from "rxjs/internal/observable/of";
import { mergeMap } from "rxjs/internal/operators/mergeMap";

@Injectable({
    providedIn: "root"
})
export class AppRoutingPreloaderService implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
        const loadRoute = delay => {
            if (delay) {
                return timer(2000).pipe(
                    mergeMap(() => {
                        console.log("execute module:", route.path);
                        return load();
                    })
                );
            } else {
                console.log("delay false");
                return load();
            }
        };
        
        if (route.data && route.data.preload) {
            return loadRoute(route.data.delay);
        } else {
            return of(null);
        }
    }
}
