# Web Application Generator

A simple, yet efficient way of creating HTML elements.

### Prerequisites

As long as you have basic knowledge of html, css (scss), and javascript, you're good to go ;)

## Getting Started

1. Install the package:

```bash
$ npm i y-elements
```

2. Include it in your source file:

```javascript
import { CreatePageElement } from "y-elements";
or;
const { CreatePageElement } = require("y-elements");
```

## Example

```javascript
import { CreatePageElement } from "y-elements";

let el = new CreatePageElement ({
    tag: "span"
    classList: ["container"],
    parent: document.body,
    innerHTML: "My awesome content, if any ;p"
});
```

## Authors

- **Younss Ait Mou** - _Initial work_ - [yaitmou](https://github.com/yaitmou)

See also the list of [contributors](https://github.com/y-elements/contributors) who participated in this project.

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE.md](LICENSE.md) file for details
