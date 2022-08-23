import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchieveButton";

function NoteItemAction({ id, onDelete, onArchieve }) {
    return (
        <div className="note-item__action">
            <DeleteButton id={id} onDelete={onDelete}/>
            <ArchiveButton id={id} onArchieve={onArchieve}/>
        </div>
    );
}

export default NoteItemAction;