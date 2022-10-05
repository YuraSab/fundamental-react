import React from 'react';
import classes from "./MyButton.module.css";

const MyButton = ({children, ...props}) => {
    return (
        <button
             // all props which we get - will here
             {...props}
            // disabled={props.disabled}
            className={classes.myBtn}
        >
            {/* inputted child */}
            {children}
        </button>
    );
};

export default MyButton;