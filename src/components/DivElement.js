// The folder src/components contains a file called DivElement.js. In this file, create a module that meets the following requirements:

// Create a class called DivElement that extends the HTMLElement class created previously. You'll need to import the class made in step 1.
// This class should have a constructor with one parameter: content.
// This class should inherit the render function in the parent class (do not override it, aka define it in DivElement).
// Within render, use a template literal to render the element.

// Import HTMLElement here
// import HTMLElement from '../src/components/HTMLElement';
import HTMLElement from './HTMLElement'
// Define class here
class DivElement extends HTMLElement {
    constructor(content){
        const tag = 'div' //test is looking for div
        // this.content = content
        super(tag, content)
        // The render method already got inherited so no need to redefine
    }
}

// const andIThinkToMyself = new DivElement('What a wonderful world');
// console.log(andIThinkToMyself.render());

// Export class here
export default DivElement ;