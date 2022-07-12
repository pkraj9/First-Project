import { LightningElement } from 'lwc';

export default class HtmlToJs extends LightningElement {

    letterHandler(event){
        var VarValueWeGotFromHTML = event.target.value;
	
        alert('you have entered a letter = ' +VarValueWeGotFromHTML );
    }
}