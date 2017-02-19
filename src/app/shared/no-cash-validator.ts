import { AbstractControl } from '@angular/forms';

export function NoCashValidator (c: AbstractControl){
    if(c.value === "cash"){
      return {
        NoCash : true
      };
    }
    else{
      return null;  
    }
}
