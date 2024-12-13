# TypeScript Optional Parameter Subtlety

This repository demonstrates a subtle behavior in TypeScript related to optional parameters.  When an optional parameter is omitted, it defaults to `undefined`, which might not always be immediately apparent, leading to unexpected behavior in your code.

The `bug.ts` file shows the issue; the `bugSolution.ts` provides a potential approach to handle such cases more robustly.