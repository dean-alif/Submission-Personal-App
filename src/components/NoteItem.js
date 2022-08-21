import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ notes, title, body, createdAt, onDelete }) {
    return (
        <div className="note-item">
            <NoteItemContent title={title} />
            <NoteItemContent createdAt={createdAt} />
            <NoteItemContent body={body} /> 
            {notes.map((note) => (
                <NoteItemAction
                key={note.id}
                id={note.id}
                onDelete={onDelete}
                {...note} />
            ))
            }
        </div>
    );
}

export default NoteItem;