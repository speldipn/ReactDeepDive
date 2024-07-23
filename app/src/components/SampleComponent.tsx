import React, { Component } from "react";

type Props = Record<string, never>

interface State {
  count: number;
}


class SampleComponent extends Component<Props, State> {
  private constructor(props: Props) {
    super(props);
    this.state = { count: 1 }
    this.handleClick = this.handleClick.bind(this);
    // Test comment
  }
  
  private handleClick() {
    this.setState((prev) => ({ count: prev.count + 1 }))
  }

  public render() {
    const { state: { count } } = this;
    return (
      <div>
        <button onClick={this.handleClick}>Increse</button>
        <h1>{count}</h1>
      </div>
    )
  }
}

export default SampleComponent;