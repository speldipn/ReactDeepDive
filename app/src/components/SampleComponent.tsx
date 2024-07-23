import React, { Component } from "react";

type Props = Record<string, never>

interface State {
  count: number;
}


export class ReactComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { count: 1 }
    this.handleClick = this.handleClick.bind(this);
  }
  
  private handleClick() {
    // this.setState((prev) => ({ count: prev.count + 1 }))
    this.setState({ count: 1 });
  }

  componentDidMount(): void {
    // console.log("did mount");
  }

  componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void {
    // console.log("will update", nextState);
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
    const { count } = prevState;
    if(count > 2) {
      return;
    }
    // console.log("did update", prevProps, prevState, snapshot);
  }

  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
    // console.log("shouldComponentUpdate", nextState, this.state.count);
    // const { count } = nextState;
    // if(count > 2) {
    //   return false;
    // }
    return true;
  }

  componentWillUnmount(): void {
    console.log("will unmount");
  }

  public render() {
    const { state: { count } } = this;
    console.log("ReactComponent");
    return (
      <h1 style={{border: '1px solid black'}}>
        {count}
        <button onClick={this.handleClick}>Increse</button>
      </h1>
    )
  }
}

// Component VS Pure Component
export class ReactPureCompoent extends React.PureComponent<Props, State> {
  private renderCounter = 0;

  constructor(props: Props) {
    super(props);
    this.state = { count: 1 };
  }

  private handleClick = () => {
    // this.setState((prev) => ({ count: prev.count + 1 }));
    this.setState({ count: 1 });
  }

  public render() {
    console.log("ReactPureComponent", ++this.renderCounter);

    return(
      <h1 style={{ border: '1px solid black' }}>
        ReactPureComponet: {this.state.count}{' '}
        <button onClick={this.handleClick}>+</button>
      </h1>
    );
  }
}

export function CompareComponent() {
  return(
    <>
      <h2>React.Component</h2>
      <ReactComponent />
      <h2>React.PureComponent</h2>
      <ReactPureCompoent />
    </>
  );
}