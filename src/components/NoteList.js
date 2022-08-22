import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete }) {
    return (
        <div className="notes-list">
            {notes.map((note) => {
                return <NoteItem key={note.id} onDelete={onDelete} {...note} />;
            })}
        </div>
    );
}

export default NoteList;