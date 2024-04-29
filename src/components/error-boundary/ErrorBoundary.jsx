import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        });
    }

    render () {
        const { children } = this.props;

        if (this.state.hasError) {
        
            return <></>;
        }
        return <React.Fragment>{children}</React.Fragment>;
    }
    
}

export default ErrorBoundary;