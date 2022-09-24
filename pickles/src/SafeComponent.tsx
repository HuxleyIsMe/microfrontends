import React from "react";

export default class SafeComponent extends React.Component {
  state: {
    hasError: boolean;
  };

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return <div>Oh no.....</div>;
    }

    return this.props.children;
  }
}
