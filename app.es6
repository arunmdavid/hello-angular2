import {Component, Template, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'hello-app'
})
@Template({
  inline: `
    Hello {{name}}
  `
})
class HelloApp {
  constructor(){
    this.name='Angular';
  }
}
bootstrap(HelloApp);