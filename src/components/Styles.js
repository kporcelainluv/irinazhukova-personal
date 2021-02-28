import makeStyles from "@material-ui/core/styles/makeStyles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

export const theme = createMuiTheme({ shadows: ["none"]});

theme.typography.h2 = {
    fontSize: '32px',
    fontWeight: 400,
    marginBottom: '24px',
};
theme.typography.h3 = {
    fontSize: '28px',
    lineHeight: "35px",
    letterSpacing: "-0.2px",
    fontWeight: 400,
    margin: '6px 0',
};
theme.typography.h4 = {
    fontSize: '24px',
    lineHeight: "34px",
    letterSpacing: "-0.2px",
    fontWeight: 400,
    margin: '6px 0 0',
};
theme.typography.h5 = {
    fontSize: '15px',
    lineHeight: "19px",
    letterSpacing: "-0.09px",
    minHeight: "auto",
    fontWeight: 400,
    margin: '6px 0',
};
theme.typography.h6 = {
    fontSize: '15px',
    lineHeight: "19px",
    letterSpacing: "-0.09px",
    minHeight: "auto",
    fontWeight: 600,
    margin: '6px 0 18px',
};

export const projectStyles = makeStyles({
paper: {
    width: '280px',
    fontFamily: "Tahoma, sans-serif",
    marginBottom: "36px",
    fontDisplay: 'swap'
},
lessonName: {
    lineHeight: "35px",
    letterSpacing: "-0.2px",
    margin: "12px 0 6px"
},
lessonIntro: {
    lineHeight: "19px",
    letterSpacing: "-0.09px",
    minHeight: "auto",
    margin: "12px 0 6px"
},
lessonPrice: {
    fontWeight: "600",
    lineHeight: "28px",
    textTransform: "uppercase",
    marginBottom: "12px"
},
lessonButton: {
    margin: "auto",
    lineHeight: "29px",
    border: "none",
    display: "flex",
    textTransform: "uppercase",
    textAlign: "center",
    cursor: "pointer",
    width: "100%",
    backgroundColor: '#f2f2f2'
},
img: {
    objectFit: "cover"
}, 
lessonsHeading: {
    lineHeight: "34px",
    letterSpacing: "-0.2px",
    width: " 280px",
    margin: "24px auto 6px"
},
listItem: {
    padding: "6px 12px 6px 0"
},
logo: {
    objectFit: "cover",
    height: '50px',
},
});