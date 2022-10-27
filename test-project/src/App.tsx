import { SplitPane } from "solid-split-pane";

const App = () => (
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
);
export default App;
