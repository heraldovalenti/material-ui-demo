import { makeStyles } from "@material-ui/core/styles";

const useUtilStyles = makeStyles((theme) => {
    return {
        inlineGapItem1: {
            marginLeft: theme.spacing(1),
        },
        inlineGapContainer1: {
            "& > * + *": {
                marginLeft: theme.spacing(1),
            },
        },
        blockGapItem1: {
            marginTop: theme.spacing(1),
        },
        blockGapContainer1: {
            "& > * + *": {
                marginTop: theme.spacing(1),
            },
        },
        inlineGapItem2: {
            marginLeft: theme.spacing(2),
        },
        inlineGapContainer2: {
            "& > * + *": {
                marginLeft: theme.spacing(2),
            },
        },
        blockGapItem2: {
            marginTop: theme.spacing(2),
        },
        blockGapContainer2: {
            "& > * + *": {
                marginTop: theme.spacing(2),
            },
        },
    };
});

export default useUtilStyles;
