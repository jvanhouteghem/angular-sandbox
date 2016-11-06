# angular2-sandbox
Step 4 : Communication between two components
---

A. Start by create a new component named counter.component : "ng g component counter"


B. CounterComponent 
We want to receive a message value from another component.  
In counter.component.ts import add the following code : 
```
import { Component, OnInit, Input } from '@angular/core'; // <-- add Input

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() message; // <-- add the message input variable

  constructor() { }

  ngOnInit() {
  }

}
```

- To display the message value :   
Add in counter.component.html :
```
<p>app-counter : {{message}}</p>
```

C. AppComponent

- We create the value that we want to pass to another component.   
In app.component.html :    
-- If we want to pass a static value :   
```<app-counter [message]="'static value'"></app-counter>```   
-- If we want to pass a variable (for example the title in app.component.ts) :  
```<app-counter [message]="title"></app-counter>```

Result : 

![alt tag](http://vanhouteghem-jonathan.fr/wp-content/uploads/2016/11/Angular2SandboxStep4.png)

---
Source : https://egghead.io/lessons/angular-2-passing-data-to-components-with-input#/tab-transcript