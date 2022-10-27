import type { Component } from "solid-js";
/* @refresh reload */
import { render } from "solid-js/web";

import { SplitPane } from "./SplitPane";

const App: Component = () => {
  return (
    <>
      <p>SplitPane</p>
      <div style="display: flex">
        <SplitPane>
          <div>
            <p>Container 1</p>
          </div>
          <div>
            <p>Container 2</p>
          </div>
        </SplitPane>
      </div>
    </>
  );
};

render(() => <App />, document.getElementById("root") as HTMLElement);
