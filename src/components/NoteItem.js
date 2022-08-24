import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";
import { showFormattedDate } from "../utils/index";

function NoteItem({ id, title, body, createdAt, onDelete, onArchieve }) {
    return (
        <div className='note-item'>
            <NoteItemContent title={title} createdAt={showFormattedDate(createdAt)} body={body} />
            <NoteItemAction id={id} onDelete={onDelete} onArchieve={onArchieve}/>
        </div>
    );
}

export default NoteItem;