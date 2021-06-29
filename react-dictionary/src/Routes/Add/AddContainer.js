import React from "react";
import { connect } from "react-redux";
import firebase from "firebase/app";
import AddPresenter from "./AddPresenter";
import { addDictionaryFB } from "../../redux/modules/dictionary";

const mapStateToProps = (state) => {
    return { dictionary_list: state.dictionary.list };
};

const mapDispatchToProps = (dispatch) => {
    return {
        create: (dictionary) => {
            dispatch(addDictionaryFB(dictionary));
        },
    };
};

class AddContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.word = React.createRef();
        this.desc = React.createRef();
        this.example = React.createRef();
    }

    addDictionaryList = () => {
        const new_item = {
            word: this.word.current.value,
            desc: this.desc.current.value,
            example: this.example.current.value,
            created: firebase.firestore.FieldValue.serverTimestamp(),
        };
        this.props.create(new_item);
        this.props.history.push("/");
    };
    render() {
        return (
            <AddPresenter
                wordRef={this.word}
                descRef={this.desc}
                exampleRef={this.example}
                create={this.addDictionaryList}
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContainer);
