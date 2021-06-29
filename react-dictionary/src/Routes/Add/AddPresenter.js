import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const Input = styled.input`
    margin-bottom: 80px;
    padding: 10px;
    width: 80%;
`;

const AddPresenter = ({ wordRef, descRef, exampleRef, create }) => (
    <Container
        style={{
            maxWidth: "600px",
            border: "2px solid #bdc3c7",
            borderRadius: "2rem",
        }}
    >
        <Container maxWidth="sm">
            <h1>✏️ Dictionary</h1>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                    style={{
                        fontWeight: "600",
                        fontSize: "25px",
                        marginBottom: "5px",
                    }}
                >
                    {" "}
                    단어:
                </span>
                <Input
                    type="text"
                    placeholder="단어를 입력하세요"
                    ref={wordRef}
                ></Input>
                <span
                    style={{
                        fontWeight: "600",
                        fontSize: "25px",
                        marginBottom: "5px",
                    }}
                >
                    {" "}
                    설명:
                </span>
                <Input
                    type="text"
                    placeholder="설명을 입력하세요"
                    ref={descRef}
                ></Input>
                <span
                    style={{
                        fontWeight: "600",
                        fontSize: "25px",
                        marginBottom: "5px",
                    }}
                >
                    {" "}
                    예제:
                </span>
                <Input
                    type="text"
                    placeholder="예제를 입력하세요"
                    ref={exampleRef}
                ></Input>
            </div>
            <Button
                style={{ marginBottom: "20px" }}
                variant="contained"
                color="primary"
                onClick={create}
            >
                ADD
            </Button>
        </Container>
    </Container>
);

export default AddPresenter;
