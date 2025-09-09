import { Component, ErrorInfo, ReactNode } from "react";
import Error from "./componente/error/error";

interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log('Error: ', error)
    console.log('Error info: ', errorInfo)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (<Error/>)
    }
    return this.props.children;
  }
}

export default ErrorBoundary;