import HTMLElement from './HTMLElement';

class DivElement extends HTMLElement {
  constructor(content) {
    // test is looking for div
    const tag = 'div';
    super(tag, content);
  }
}
export default DivElement;
