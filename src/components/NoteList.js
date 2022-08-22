import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete }) {
    return (
        <>
            {notes.length > 0 ? (
                <div className="notes-list">
                {notes?.map((note) => (
                    <NoteItem key={note.id} onDelete={onDelete} {...note} />
                ))}
                </div>
                ) : <div className="notes-list"><p className="notes-list__empty-message">Tidak ada catatan</p></div>}
        </>
    );
}

export default NoteList;