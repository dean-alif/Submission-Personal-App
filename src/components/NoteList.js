import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchieve }) {
    return (
        <>
            {notes.length > 0 ? (
                <div className="notes-list">
                {notes?.map((note) => (
                    <NoteItem key={note.id} onDelete={onDelete} onArchieve={onArchieve} {...note} />
                ))}
                </div>
                ) : <div className="notes-list"><p className="notes-list__empty-message">Tidak ada catatan aktif</p></div>}
        </>
    );
}

export default NoteList;