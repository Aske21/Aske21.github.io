import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false, error: null };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError && this.state.error) {
      return (
        <div
          style={{
            padding: 24,
            fontFamily: "monospace",
            background: "#1e1e2e",
            color: "#f38ba8",
            minHeight: "100vh",
            whiteSpace: "pre-wrap",
          }}
        >
          <strong>Something went wrong:</strong>
          {"\n\n"}
          {this.state.error.message}
          {"\n\n"}
          <details style={{ color: "#a6adc8", marginTop: 16 }}>
            <summary>Stack</summary>
            <pre style={{ fontSize: 12, overflow: "auto" }}>
              {this.state.error.stack}
            </pre>
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}
