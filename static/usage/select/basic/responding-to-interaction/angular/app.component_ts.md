```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  logs: string[] = [];

  pushLog(msg) {
    this.logs.unshift(msg);
  }
}
```