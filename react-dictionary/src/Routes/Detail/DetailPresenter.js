import React, { useState } from "react";
import firebase from "firebase/app";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import styled from "styled-components";

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
        <Container>
            <Container
                maxWidth="sm"
                style={{
                    maxWidth: "600px",
                    border: "2px solid #bdc3c7",
                    borderRadius: "2rem",
                    padding: "30px",
                }}
            >
                <div>
                    <h1>✏️ Edit Dictionary</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            단어
                            <Input
                                name="word"
                                type="text"
                                value={inputWord}
                                onChange={handleChange}
                            />
                            <br />
                            설명
                            <Input
                                name="desc"
                                type="text"
                                value={inputDesc}
                                onChange={handleChange}
                            />
                            <br />
                            예제
                            <Input
                                name="example"
                                type="text"
                                value={inputExample}
                                onChange={handleChange}
                            />
                            <br />
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Edit
                            </Button>
                        </div>
                    </form>
                </div>
            </Container>
        </Container>
    );
};

const Input = styled.input`
    margin-bottom: 80px;
    padding: 10px;
    width: 80%;
`;

export default DetailPresenter;
