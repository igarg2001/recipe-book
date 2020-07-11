import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]
})

export class HeaderComponent {
    @Output() toggleNavigation = new EventEmitter<string>()
    navigate = (url:string) => {
        this.toggleNavigation.emit(url)
    }
}