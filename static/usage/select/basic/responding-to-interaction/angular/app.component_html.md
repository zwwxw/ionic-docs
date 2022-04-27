```html
<ion-select placeholder="Select fruit">
  <ion-select-option>Apples</ion-select-option>
  <ion-select-option>Oranges</ion-select-option>
  <ion-select-option>Bananas</ion-select-option>
</ion-select>
<div id="log">
  <p *ngFor="let log of logs">{{ log }}</p>
  <p>Events will log above</p>
</div>
```