import React, { useState } from "react";
import AddPoem from "./components/AddPoem";
import PlayPoem from "./components/PlayPoem";
import styles from "./styles.module.css";

const OpenPoetry = (props) => {
    const [poemText, setPoemText] = useState("");
    const [openSection, setOpenSection] = useState(0);

    const onSetPoemText = (value) => {
        setPoemText(value);
    }

    const onSetOpenSection = (value) => {
        setOpenSection(value);
    }

    return (
        <div className={styles.reactopenpoetrywrapper}>
            <h1 className={styles.reactopenpoetryh1}>{(props.name) ? props.name : "OpenPoetry"}</h1>
            <p className={styles.reactopenpoetryslogan}>{(props.slogan) ? props.slogan : "Write down the poem to memorize easier."}</p>

            {(openSection == 0) ? (
                <AddPoem onChangePoem={onSetPoemText} onSetSection={onSetOpenSection} heading1={props.heading1} helper={props.helper} nextButton={props.nextButton} />
            ) : (
                <PlayPoem poemTextPass={poemText} heading2={props.heading2} hintButton={props.hintButton} hintText={props.hintText} showHint={props.showHintOnStart} />
            )
            }
        </div>
    )
}

export default OpenPoetry;