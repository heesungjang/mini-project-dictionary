import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { deleteDictionaryFB } from "../redux/modules/dictionary";
import { useDispatch } from "react-redux";
import history from "../history";
const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 10,
    },
});

export default function OutlinedCard({
    dictionaryList: { word, desc, example, index },
}) {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <div style={{ marginBottom: "20px" }}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography
                        className={classes.title}
                        gutterBottom
                        variant="h6"
                    >
                        <span style={{ color: "#273c75", fontWeight: "700" }}>
                            단어:
                        </span>
                    </Typography>
                    <Typography variant="h6" component="h2">
                        {word}
                        <hr style={{ width: "98%" }} />
                    </Typography>
                    <Typography className={classes.pos}>
                        <span style={{ color: "#273c75", fontWeight: "600" }}>
                            설명:
                        </span>
                    </Typography>
                    <div>{desc}</div>
                    <Typography
                        variant="body2"
                        component="p"
                        style={{ margin: "7px 0" }}
                    >
                        <span style={{ color: "#273c75", fontWeight: "600" }}>
                            예제:
                        </span>
                    </Typography>
                    <Typography>
                        <span>{example}</span>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained">
                        <Link
                            style={{ color: "inherit", textDecoration: "none" }}
                            to={`/edit/${index}`}
                        >
                            Edit
                        </Link>
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => {
                            dispatch(deleteDictionaryFB(index));
                        }}
                    >
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}
