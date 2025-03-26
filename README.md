# Math.interpolate

A lightweight library for the interpolation. It performs the **Lagrange interpolation**:

$$
P(x) = \sum_{i=1}^n y_i \ell_i(x), \quad
\ell_i(x) = \prod_{j \neq i} \frac{x-x_j}{x_i-x_j}
$$

To find a function, pass known points to the `Math.interpolate()` method:

```
const points = [
 [2,6], [3,12], [4,20], [5,30]
];

const f = Math.interpolate(points);
// x²+x

f(4) // 20
f(1.5) // 3.75
```
