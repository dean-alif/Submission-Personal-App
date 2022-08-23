import React from "react";
import NoteItem from "./NoteItem";

function NoteArchivedList({ notes, onDelete, onArchieve }) {
    return (
        <>
            <div className="note-app__body">
                <h2>Catatan Arsip</h2>

                {notes.length > 0 ? (
                    <div className="notes-list">
                    {notes?.map((note) => (
                        <NoteItem key={note.id} onDelete={onDelete} onArchieve={onArchieve} {...note} />
                    ))}
                    </div>
                    ) : <div className="notes-list"><p className="notes-list__empty-message">Tidak ada catatan arsip</p></div>}
            </div>
        </>
    );
}

export default NoteArchivedList;