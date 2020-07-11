import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {

    }
    @HostBinding('class.open') isOpen:boolean
    ngOnInit() {
        this.isOpen=false
    }
    @HostListener('click') click(eventData: Event) {
        //console.log(this.elementRef.nativeElement.classList.contains('open'))
        this.isOpen = !this.isOpen
        // if(this.elementRef.nativeElement.classList.contains('open')) {
        //     //this.renderer.removeClass(this.elementRef.nativeElement, 'open')
            
        // }
        // else {
        //     this.renderer.addClass(this.elementRef.nativeElement, 'open')
        // }
    }
}