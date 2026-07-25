import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-error-container text-on-error-container rounded-lg border border-error/50">
          <h2 className="font-bold">Component Crashed</h2>
          <pre className="text-xs mt-2 overflow-auto whitespace-pre-wrap">{this.state.error?.toString()}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}
