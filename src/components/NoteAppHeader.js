import React from "react";

function NoteAppHeader({ id, title, body, createdAt }) {
    return (
        <div className="note-app__header">
            <h1>Notes</h1>
            <input type="text" placeholder="Cari catatan ..." />
        </div>
    );
}

export default NoteAppHeader;