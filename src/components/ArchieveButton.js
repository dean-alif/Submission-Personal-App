import React from "react";

function ArchieveButton({ id, onArchieve }) {
    return <button className='note-item__archive-button' onClick={() => onArchieve(id)}>Arsipkan</button>
}

export default ArchieveButton;