import React from "react";

function NoteAppHeader() {
    return (
        <div className="note-app__header">
            <h1>Notes</h1>
            <input type="text" placeholder="Cari catatan ..." />
        </div>
    );
}

export default NoteAppHeader;