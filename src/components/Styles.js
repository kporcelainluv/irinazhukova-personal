import makeStyles from "@material-ui/core/styles/makeStyles";

export const projectStyles = makeStyles({
paper: {
    width: '280px',
    boxShadow: "none",
    fontFamily: "Tahoma, sans-serif",
    marginBottom: "24px"
},
lessonName: {
    fontSize: "28px",
    lineHeight: "35px",
    letterSpacing: "-0.2px",
    margin: "12px 0 6px"
},
lessonIntro: {
    fontSize: "15px",
    lineHeight: "19px",
    letterSpacing: "-0.09px",
    minHeight: "auto",
    margin: "12px 0 6px"
},
lessonPrice: {
    fontSize: "16px",
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
    fontSize: "24px",
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
    height: '40px',
}


});