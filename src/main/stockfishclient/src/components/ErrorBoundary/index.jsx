import { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Something went wrong.</h1>
                    <p>{this.state.error?.message || "An unexpected error occurred."}</p>
                </div>
            );
        }

        return this.props.children;
    }
}

// PropTypes로 props의 타입 정의
ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired, // children은 필수로 정의
};

export default ErrorBoundary;
