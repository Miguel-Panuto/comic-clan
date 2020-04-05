import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
    // This check if the route have been changed
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0); // if chages, it scrolls to the top of the page 
        }
    }

    render() {
        return this.props.children;
    }
}

export default withRouter(ScrollToTop)