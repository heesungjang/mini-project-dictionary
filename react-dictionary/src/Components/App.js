import Router from "./Router";
import React, { Component } from "react";

import { connect } from "react-redux";
import { loadDictionaryFB } from "../redux/modules/dictionary";

const mapStateToProps = (state) => {
    return { dictionary_list: state.dictionary.list };
};
const mapDispatchToProps = (dispatch) => {
    return {
        load: () => {
            dispatch(loadDictionaryFB());
        },
    };
};
class App extends Component {
    async componentDidMount() {
        this.props.load();
    }
    render() {
        return (
            <>
                <Router />
            </>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
