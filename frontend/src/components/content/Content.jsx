import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../settings/resume.json";
import { FirstName, LastName } from "../../utils/getName";
import Role from "../Roles/Role";
import waving from "../../assets/waving.gif";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: "auto",
    marginBottom: "auto",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeText: {
    textAlign: 'center',
  },
  hi: {
    fontSize: '1.8rem',
    color: 'inherit',
  },
  waving: {
    width: '40px',
    height: '40px',
    marginBottom: '-7px',
    marginLeft: '5px',
  },
  intro: {
    fontSize: '5rem',
    color: '#9CAFFB',
    fontWeight: 'bold',
    marginTop: '-2rem',
  },
  jobs: {
    fontSize: '1.8rem',
    color: 'inherit',
    fontWeight: 'bold',
    marginTop: '-3rem',
  },
  '@media (max-width: 1200px)': {
    intro: {
      fontSize: '4rem',
      marginTop: '-1.5rem',
    },
    jobs: {
      fontSize: '1.3rem',
      marginTop: '-2.5rem',
    },
  },
  '@media (max-width: 960px)': {
    intro: {
      fontSize: '3.5rem',
      marginTop: '-1rem',
    },
    jobs: {
      fontSize: '1.2rem',
      marginTop: '-2rem',
    },
  },
  '@media (max-width: 600px)': {
    intro: {
      fontSize: '3rem',
      marginTop: '-0.5rem',
    },
    jobs: {
      fontSize: '1rem',
      marginTop: '-1.5rem',
    },
  },
  '@media (max-width: 400px)': {
    intro: {
      fontSize: '2.5rem',
      marginTop: '0',
    },
    jobs: {
      fontSize: '0.9rem',
      marginTop: '-1rem',
    },
  },
}));

export const Content = () => {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.main} maxWidth="md">
      <div className={classes.homeText}>
        <h2 className={classes.jobs}>
          Hi There <img className={classes.waving} src={waving} alt="waving hand" />
        </h2>
        <h1 className={classes.intro}>I'm {FirstName} {LastName}</h1>
        <h2 className={classes.jobs}><Role /></h2>
      </div>
    </Container>
  );
};
