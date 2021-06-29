import React, { useState } from "react";
import firebase from "firebase/app";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const DetailPresenter = ({ word, desc, example, update }) => {
    const [inputWord, setInputWord] = useState(word);
    const [inputDesc, setInputDesc] = useState(desc);
    const [inputExample, setInputExample] = useState(example);

    const handleChange = (e) => {
        if (e.target.name === "word") {
            setInputWord(e.target.value);
        } else if (e.target.name === "desc") {
            setInputDesc(e.target.value);
        } else {
            setInputExample(e.target.value);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const new_dictionary = {
            word: inputWord,
            desc: inputDesc,
            example: inputExample,
            created: firebase.firestore.FieldValue.serverTimestamp(),
        };
        update(new_dictionary);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                단어
                <input
                    name="word"
                    type="text"
                    value={inputWord}
                    onChange={handleChange}
                />
                <br />
                설명
                <input
                    name="desc"
                    type="text"
                    value={inputDesc}
                    onChange={handleChange}
                />
                <br />
                예제
                <input
                    name="example"
                    type="text"
                    value={inputExample}
                    onChange={handleChange}
                />
                <br />
                <button type="submit">Edit</button>
            </div>
        </form>
    );
};

export default DetailPresenter;
