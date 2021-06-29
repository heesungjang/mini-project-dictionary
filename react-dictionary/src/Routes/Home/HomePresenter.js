import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../Components/Button";

import Loader from "../../Components/Loader";
import Card from "../../Components/Card";
import Container from "@material-ui/core/Container";

const SLink = styled(Link)`
    color: inherit;
    text-decoration: none;
`;

const HomePresenter = (props) => {
    return (
        <Container
            maxWidth="sm"
            style={{ border: "2px solid #bdc3c7", borderRadius: "2rem" }}
        >
            <Container
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <h1>✏️ Dictionary</h1>
                <SLink
                    to="/add"
                    style={{
                        right: "0",
                    }}
                >
                    <Button />
                </SLink>
            </Container>
            <div>
                {props.dictionaryList[0].id ? (
                    <Container
                        maxWidth="sm"
                        style={{
                            height: "95vh",
                            overflow: "overlay",
                            position: "relative",
                        }}
                    >
                        <div>
                            {props.dictionaryList
                                .reverse()
                                .map((dictionary, idx) => {
                                    return (
                                        <Card
                                            key={idx}
                                            dictionaryList={{
                                                ...dictionary,
                                                index: idx,
                                            }}
                                        />
                                    );
                                })}
                        </div>
                    </Container>
                ) : (
                    <Container>
                        <Container
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100vh",
                                width: "100vw",
                            }}
                        >
                            <div>
                                <Loader />
                            </div>
                        </Container>
                    </Container>
                )}
            </div>
        </Container>
    );
};

export default HomePresenter;
