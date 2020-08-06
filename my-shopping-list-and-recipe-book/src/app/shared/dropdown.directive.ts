import { Directive, HostBinding, HostListener } from '@angular/core';
@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    // css class we need to attach dynamically
@HostBinding('class.open') isOpen = false;

     @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen
     }


}