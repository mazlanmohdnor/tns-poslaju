import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ILanguage } from "~/app/interfaces/ILanguage";
import { ITracking } from "~/app/interfaces/ITracking";

@Injectable({
    providedIn: "root"
})
export class SubjectService {
    
    myData: BehaviorSubject<ITracking[]> = new BehaviorSubject<ITracking[]>([]);
    myData$ = this.myData.asObservable();
    
    lang: BehaviorSubject<ILanguage> = new BehaviorSubject<ILanguage>({
        id: "en",
        description: "English",
        value: "en"
    });
    lang$ = this.lang.asObservable();
    
    isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
    isLoading$ = this.isLoading.asObservable();
    
    constructor(
        // public storage: NativeStorage
    ) {}
    
    setData(data) {
        // this.storage.setItem('tracking', data).then(data2 => {
        //     this.myData.next(data2);
        // });
    }
    
    broadcastData(data) {
        this.myData.next(data);
    }
    
    broadcastLoading(isLoading: boolean) {
        this.isLoading.next(isLoading);
    }
    
    broadcastLang(lang: ILanguage) {
        this.lang.next(lang);
    }
    
}
