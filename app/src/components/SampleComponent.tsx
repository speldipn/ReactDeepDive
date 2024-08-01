import React, { Component, PureComponent } from "react";

/*
  getDerivedStateFromProps
  SampleComponent.tsx:40 shouldComponentUpdate {count: 2} 1
  SampleComponent.tsx:70 ReactComponent render()
  SampleComponent.tsx:56 getSnapshotBeforeUpdate 2
  SampleComponent.tsx:36 did update {} {count: 1} null
*/

type Props = Record<string, never>;

interface State {
  count: number;
}

export class ReactComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { count: 1 };
    this.handleClick = this.handleClick.bind(this);
  }

  private handleClick() {
    this.setState((prev) => ({ count: prev.count + 1 }));
    // this.forceUpdate(() => console.log("forceUpdate"));
    // this.setState({ count: 1 });
  }

  componentDidMount(): void {
    // console.log("did mount");
  }

  componentWillUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<State>,
    nextContext: any,
  ): void {
    // console.log("will update", nextState);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
    snapshot?: any,
  ): void {
    // const { count } = prevState;
    // if(count > 2) {
    //   return;
    // }
    console.log("did update", prevProps, prevState, snapshot);
  }

  shouldComponentUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<State>,
    nextContext: any,
  ): boolean {
    console.log("shouldComponentUpdate", nextState, this.state.count);
    // const { count } = nextState;
    // if(count > 2) {
    //   return false;
    // }
    return true;
  }

  static getDerivedStateFromProps(nextProps: Props, prevState, State: State) {
    // NOTE: static function
    // equal to componentWillReceiveProps
    // return value to state values
    console.log("getDerivedStateFromProps");
    return null;
  }

  getSnapshotBeforeUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ) {
    //  before updating DOM, call this method
    console.log("getSnapshotBeforeUpdate", this.state.count);
    if (this.state.count > 2) {
      // passing to snapshot parameter of ComponentDidUpdate
      return { name: "neo", age: 37 };
    }
    return null;
  }

  componentWillUnmount(): void {
    // console.log("will unmount");
  }

  public render() {
    const {
      state: { count },
    } = this;
    console.log("ReactComponent render()");
    return (
      <h1>
        ReactComponent:{count} <button onClick={this.handleClick}>+</button>
      </h1>
    );
  }
}

// Component VS Pure Component
export class ReactPureComponent extends PureComponent<Props, State> {
  private renderCounter = 0;

  constructor(props: Props) {
    super(props);
    this.state = { count: 1 };
  }

  private handleClick = () => {
    // this.setState((prev) => ({ count: prev.count + 1 }));
    this.setState({ count: 1 });
  };

  public render() {
    console.log("ReactPureComponent render()", ++this.renderCounter);

    return (
      <h1>
        ReactPureComponent: {this.state.count}{" "}
        <button onClick={this.handleClick}>+</button>
      </h1>
    );
  }
}

export function CompareComponent() {
  return (
    <>
      <h2>React.Component</h2>
      <ReactComponent />
      <h2>React.PureComponent</h2>
      <ReactPureComponent />
    </>
  );
}
