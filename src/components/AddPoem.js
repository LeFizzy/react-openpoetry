import React, { useState } from "react";
import styles from "../styles.module.css";

const AddPoem = (props) => {
    const [poemText, setPoemText] = useState("");
    const [nextDisabled, setNextDisabled] = useState(true);

    const onSetPoemText = (e) => {
        setPoemText(e.target.value);
        props.onChangePoem(e.target.value);

        if (e.target.value != "") {
            onSetNextDisabled(false);
        } else {
            onSetNextDisabled(true);
        }
    }

    const onSetNextDisabled = (value) => {
        setNextDisabled(value);
    }

    const onChangeSection = () => {
        props.onSetSection(1);
    }

    return (
        <div className={styles.reactopenpoetryaddpoem}>
            <h3>1. {(props.heading) ? props.heading1 : "Add the poem you are about to learn/practice."}</h3>
            <p className={styles.reactopenpoetryslogan}>{(props.helper) ? props.helper : "Try to split the poem for each verse."}</p>

            <div className={styles.reactopenpoetryaddpoeminputwrapper + " " + styles.reactopenpoetrymargin2}>
                <textarea type="text" className={styles.reactopenpoetryaddpoeminput} value={poemText} onChange={onSetPoemText}></textarea>
            </div>

            <button className={styles.reactopenpoetrybtn} onClick={onChangeSection} disabled={nextDisabled}>{(props.nextButton) ? props.nextButton : "Next"}</button>
        </div>
    )
}

export default AddPoem;