import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Card, CardContent, CardActions, Paper, Button, Typography } from '@material-ui/core/';
import { pink, blue } from '@material-ui/core/colors/';
import ICON from './ICON.js'
import {roundedIcon as Glyph} from '@glyphs/rounded'
import '../mousePosition.js'
import useMousePosition from '../mousePosition.js';
import $ from "jquery"

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


export default function APP_HOME() {

    const useStyles = makeStyles((theme) => ({
        root: {

        },
        item: {
            padding: `0 ${theme.spacing(2)}px`
        },
        contents: {
            color: "#fff",
            textAlign: "right",
            background: "transparent",
            boxShadow: "none",
            margin: `0 ${theme.spacing(2)}px`,
            padding: 0,
            position: "relative"

        },
        selectors: {
            width: "100%",
            backgroundColor: theme.palette.background.paper,
            borderRadius: "8px",
            padding: theme.spacing(2),
            margin: theme.spacing(2)
        },
        iconBox: {
            float: "left",
            position: "relative",
            padding: `${theme.spacing(2)}px`,
            borderRadius: "3px",
            background: `linear-gradient(60deg, ${blue[400]}, ${blue[700]})`,
            boxShadow: `0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(${hexToRgb(blue[100]).r}, ${hexToRgb(blue[100]).g}, ${hexToRgb(blue[100]).b},.4)`,
            borderRadius: "8px"

        },
        cardTitle: {
            color: "#fff",
            overflow: "unset",
            fontSize: "36px",
            textAlign: "center",
            marginBottom: "1px"
        },
        buttons: {
            padding: "8px 16px",
            border: "none",
            marginTop: "-24px",
            borderRadius: "8px",
            fontSize: "12px",
            marginLeft: "24px",
            fontWeight: "400",
            marginRight: "24px",
            boxShadow: theme.myShadows.button.color("233, 30, 99"),
            background: `linear-gradient(60deg, ${pink[300]}, ${pink[500]})`,
            color: "white",
            "&:hover": {
                backgroundColor: pink[500],
                boxShadow: theme.myShadows.button.hoverColor("233,30,99")
            }
        },
        actions: {

        }
    }));

    const classes = useStyles();
    return (
        <div>
            <Grid
                container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="center"

            >
                <Paper className={classes.selectors}>
                    <Grid
                        item
                        className={classes.item}
                        xs={4}
                        s={3}
                        md={3}
                        lg={2}>
                        <Paper className={classes.iconBox}>
                            <Typography variant="h5" className={classes.cardTitle}><Glyph name="car"></Glyph></Typography>
                        </Paper>
                    </Grid>
                </Paper>

            </Grid>
        </div>
    );
};