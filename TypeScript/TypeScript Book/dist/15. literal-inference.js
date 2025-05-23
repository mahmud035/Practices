"use strict";
{
    // Literal Inference
    // NOTE: Literal Inference is a feature in TypeScript that allows the type of a variable or parameter to be inferred based on its value.
    // In the following example we can see that TypeScript considers `x` a literal type as the value cannot be changed any time later, when instead `y` is inferred as string as it can be modified any time later.
    const x = 'x'; // Literal type of 'x', because this value cannot be changed
    let y = 'y'; // Type string, as we can change this value
    let o = {
        x: 'a', // This is a wider string
    };
    const fn = (x) => `${x}-foo`;
    // console.log(fn(o.x)); // 🔴 Argument of type 'string' is not assignable to parameter of type 'X'
    // As you can see the code throws an error when passing `o.x` to `fn` as `X` is a narrower type.
    // TODO: We can solve this issue by using type assertion using `const` or the `X` type:
    let o2 = {
        x: 'a',
    };
    // or:
    let o3 = {
        x: 'a',
    };
    console.log(fn(o2.x)); // a-foo
    console.log(fn(o3.x)); // a-foo
}
