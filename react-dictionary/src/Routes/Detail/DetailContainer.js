import React from "react";
import DetailPresenter from "./DetailPresenter";
import { connect } from "react-redux";
import { updateDictionaryFB } from "../../redux/modules/dictionary";

const mapStateToProps = (state) => {
    return { dictionary_list: state.dictionary.list };
};

const mapDispatchToProps = (dispatch) => {
    return {
        update: (index, new_dictionary) => {
            dispatch(updateDictionaryFB(index, new_dictionary));
        },
    };
};

class DetailContainer extends React.Component {
    updateDictionaryList = (new_dictionary) => {
        const dictionary_index = this.props.match.params.id;
        this.props.update(dictionary_index, new_dictionary);
    };

    render() {
        const { word, desc, example } =
            this.props.dictionary_list[this.props.match.params.id];
        const isexiting =
            this.props.dictionary_list[this.props.match.params.id].id;
        return (
            <div>
                {isexiting && (
                    <DetailPresenter
                        update={this.updateDictionaryList}
                        word={word}
                        desc={desc}
                        example={example}
                    />
                )}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);
