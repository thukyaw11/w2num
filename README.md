## w2num

**Description:**
w2num is a lightweight npm package that converts words representing numbers into their numerical equivalents. Whether you're parsing user input, processing textual data, or any other scenario where words need to be transformed into numbers, this package provides a simple and efficient solution. With support for a wide range of numerical expressions and configurations, it seamlessly integrates into your Node.js projects, enabling streamlined conversion with minimal overhead.

**Features:**
- Convert words to numbers effortlessly.
- Support for a variety of numerical expressions (e.g., "twenty-three", "five hundred and twelve", "one hundred twenty-three thousand").
- Configurable options for customization and flexibility.
- Lightweight and optimized for performance.
- Compatible with Node.js environments.

**Installation:**
```javascript
npm install w2num
```

**Usage:**
```javascript
import w2num from "w2num"

const myWordToNum = new w2num();

myWordToNum.convert('seventy-eight thousand six hundred fifty-seven'); // Output: 78657
```
