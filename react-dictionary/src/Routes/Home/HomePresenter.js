import React from "react";
import Card from "../../Components/Card";
import Container from "@material-ui/core/Container";
import Icon from "@material-ui/core/Icon";

const HomePresenter = () => (
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
            <Card />
            <Card />
            <Card />
            <Card />
        </Container>
    </Container>
);

export default HomePresenter;
