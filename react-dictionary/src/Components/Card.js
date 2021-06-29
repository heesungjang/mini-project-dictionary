import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
    dictionaryList: { id, word, desc, example },
}) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div style={{ marginBottom: "20px" }}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        <span style={{ color: "red" }}>단어</span>
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {word}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        <span style={{ color: "red" }}>설명</span>
                    </Typography>
                    <Typography variant="body2" component="p">
                        {desc}
                        <span style={{ color: "red" }}>예제</span>
                        {example}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained">Edit</Button>
                    <Button variant="contained" color="secondary">
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}
