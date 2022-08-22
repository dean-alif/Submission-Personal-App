import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ id, title, body, createdAt, onDelete }) {
    return (
        <div className='note-item'>
            <NoteItemContent title={title} createdAt={createdAt} body={body} />
            <NoteItemAction id={id} onDelete={onDelete} />
        </div>
    );
}

export default NoteItem;