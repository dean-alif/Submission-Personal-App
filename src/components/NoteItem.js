import React from "react";
import NoteItemContent from "./NoteItemContent";

function NoteItem({ id, archived, title, body, createdAt, onDelete }) {
    return (
        <div className='note-item'>
            <NoteItemContent title={title} createdAt={createdAt} body={body} />
        </div>
    );
}

export default NoteItem;