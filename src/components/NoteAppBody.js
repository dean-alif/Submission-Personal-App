import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteAppBody({ id, notes, onDelete, addNote }) {
    return (
        <div className="note-app__body">
            <h2>Buat Catatan</h2>
            <NoteInput addNote={addNote} />
            <h2>Catatan Aktif</h2>
            <NoteList id={id} notes={notes} onDelete={onDelete}></NoteList>
        </div>
    );
}

export default NoteAppBody;