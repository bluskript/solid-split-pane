# solid-split-pane

Split pane component for Solid! Uses Split.Js under the hood. Takes all props that `split.js` takes, plus a `gutterClass`.

(Q) Why not `solid-split` or `solid-split-component`?

solid-split contains a custom split implementation that has much less features. `solid-split-component`'s internals seemed rather complicated for what
seems to be a simple problem. I just wanted to publish my solution, which is just a lightweight wrapper over Split.Js.

## Usage

```
npm i solid-split-pane
```

```jsx
import { SplitPane } from "solid-split-pane";

export const App = () => {
  <div style="display: flex">
    <SplitPane>
      <div>
        <p>Container 1</p>
      </div>
      <div>
        <p>Container 2</p>
      </div>
    </SplitPane>
  </div>;
};
```
