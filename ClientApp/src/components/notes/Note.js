﻿import "./Note.css"

import React from "react";
import {Close} from "@mui/icons-material";

const Note = (props) => {
    
       
    return (
        <div style={{backgroundColor: props.note.color}} className={"note-container"} onClick={props.onClick.bind(this, props.note)}>
            <p className={"note-title"}>{props.note.title}</p>
            <p>{new Date(props.note.createdDate).toLocaleString()}</p>
            <p className={"note-content"}>{props.note.content}</p>
        </div>
    )
}

export default Note