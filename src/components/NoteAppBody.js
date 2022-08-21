import React from "react";
import NoteInput from "./NoteInput";
import NoteItem from "./NoteItem";

function NoteAppBody({ id, title, body, createdAt }) {
    return (
        <div className="note-app__body">
            <h2>Buat Catatan</h2>
            <NoteInput />
            <h2>Catatan Aktif</h2>
            <NoteItem />
        </div>
    );
}

export default NoteAppBody;