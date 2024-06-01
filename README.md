## w2num

**Description:**
w2num is a lightweight npm package that converts words representing numbers into their numerical equivalents. Whether you're parsing user input, processing textual data, or any other scenario where words need to be transformed into numbers and vice-versa, this package provides a simple and efficient solution. With support for a wide range of numerical expressions and configurations, it seamlessly integrates into your Node.js projects, enabling streamlined conversion with minimal overhead.

**Features:**
- Convert words to numbers, numbers to words effortlessly.
- Support for a variety of numerical expressions (e.g., "twenty-three", "five hundred and twelve", "one hundred twenty-three thousand").
- Configurable options for customization and flexibility.
- Lightweight and optimized for performance.
- Compatible with Node.js environments.
- Support minus case

**Installation:**
### npm
```javascript
npm install w2num

```

### cdn
For ease of use, you can simply add cdn link supported by [unpkg](https://unpkg.com/w2num@1.1.0/index.js)

```javascript
<script src="https://unpkg.com/w2num@1.1.0/index.js"></script>
```

**Usage:**
```javascript
import w2num from "w2num"

const converter = new w2num();

converter.toNum('seventy-eight thousand six hundred fifty-seven'); // Output: 78657
converter.toWord(9123); // Output: nine thousand one hundred and twenty-three
```
