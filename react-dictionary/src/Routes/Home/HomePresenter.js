import React from "react";
import Loader from "../../Components/Loader";
import Card from "../../Components/Card";
import Container from "@material-ui/core/Container";
import Icon from "@material-ui/core/Icon";

const HomePresenter = (props) => {
    return (
        <>
            {props.dictionaryList[0].id ? (
                <Container fixed>
                    <Container maxWidth="sm">
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <h1>✏️ Dictionary</h1>
                            <Icon
                                style={{
                                    fontSize: "40px",
                                }}
                            >
                                ⨁
                            </Icon>
                        </div>
                        {props.dictionaryList.map((dictionary, idx) => {
                            return (
                                <Card key={idx} dictionaryList={dictionary} />
                            );
                        })}
                    </Container>
                </Container>
            ) : (
                <Container>
                    <div
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
                    </div>
                </Container>
            )}
        </>
    );
};

export default HomePresenter;
