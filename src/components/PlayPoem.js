import React, { useState, useEffect } from "react";
import styles from "../styles.module.css";

const PlayPoem = (props) => {
    const [userPoemText, setUserPoemText] = useState("");
    const [poemText, setPoemText] = useState([]);
    const [showHint, setShowHint] = useState(true);

    const onSetUserPoemText = (e) => {
        setUserPoemText(e.target.value);
    }

    const onSetPoemText = (array) => {
        setPoemText(array);
    }

    const onShowHint = () => {
        setShowHint(!showHint);
    }

    const onSetShowHint = (value) => {
        setShowHint(value);
    }

    useEffect(() => {
        let poemCharArray = props.poemTextPass.split('');
        let showHintSet = props.showHint;

        onSetPoemText(poemCharArray);
        onSetShowHint(showHintSet);
    }, [props.poemTextPass, props.showHint])  

    return (
        <div className={styles.reactopenpoetryplaypoem}>
            <h3>2. {(props.heading2) ? props.heading2 : "Practice to write it down."}</h3>

            <div className={styles.reactopenpoetryplaypoemhint + " " + styles.reactopenpoetrymargin2} style={{ "display": (showHint) ? "block": "none" }}>
                <p className={styles.reactopenpoetryplaypoemverse}>{(props.hintText) ? props.hintText : "Poem hint"}</p>

                <div className={styles.reactopenpoetryplaypoemhintrover}>
                    {(poemText) ? 
                        ( poemText.map((char, index) => {
                            return <span id={index} className={(char.toLowerCase() == ((userPoemText[index]) ? userPoemText[index].toLowerCase() : userPoemText[index])) ? styles.reactopenpoetrygreencorrect : "react-openpoetry-green-none"}>{char}</span>;
                        })
                        ) : (
                            <p></p>
                        )
                    }
                </div>
            </div>

            <button className={styles.reactopenpoetrybtn} onClick={onShowHint}>{(props.hintButton) ? props.hintButton : "Show/hide hint"}</button>

            <div className={styles.reactopenpoetryaddpoeminputwrapper + " " + styles.reactopenpoetrymargin2}>
                <textarea type="text" className={styles.reactopenpoetryaddpoeminput} value={userPoemText} onChange={onSetUserPoemText}></textarea>
            </div>
        </div>
    )
};

export default PlayPoem;