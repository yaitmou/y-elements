/**
 * Create a new HTML Element
 *
 * @param {object} options            The constructor takes an object wrapping the element's options
 * @param {object} options.tag        If provided will be used in createElement(tagname) otherwise it will default to "div"
 * @param {object} options.classList  An array containing the list of class list stings
 * @param {object} options.parent     The element's parent if any. If not provided it will default to document.body
 * @param {object} options.innerHTML  The element's inner html content
 * @param {object} options.prepend    If set to true the element will be prepended to its parent
 *
 */
export class CreatePageElement {
  constructor(options) {
    this.tag = options.tag || "div";
    this.classList = options.classList;
    this.parent = options.parent || document.body;
    this.innerHTML = options.innerHTML;
    this.prepend = options.prepend || false;

    // Create the element
    this.el = document.createElement(this.tag);

    // Add class list if any
    if (this.classList) {
      options.classList.forEach(c => {
        this.el.classList.add(c);
      });
    }

    // Add Html content if any
    if (this.innerHTML) this.el.innerHTML = this.innerHTML;

    // Append or prepend the element to its parent
    options.prepend
      ? options.parent.prepend(this.el)
      : options.parent.appendChild(this.el);
  }

  /**
   * Update the html content
   */
  set hContent(htmlContent) {
    this.innerHTML = htmlContent;
  }

  get hContent() {
    return this.innerHTML;
  }

  set addClass(newClassList) {
    this.classList.push(newClassList);
  }

  /**
   * Get the newly created instance
   */
  get element() {
    return this.el;
  }

  removeClass(className) {
    this.classList = _.remove(this.classList, d => c === className);
    this.element.classList;
  }
}
