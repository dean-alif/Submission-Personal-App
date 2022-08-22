import React from "react";
import { getInitialData, showFormattedDate } from "../utils/index";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppBody from "./NoteAppBody";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onAddNoteHandler({ title, body, createdAt }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: showFormattedDate(createdAt),
                    }
                ]
            }
        });
    }

    render() {
        return (
            <div className="note-app">
                <NoteAppHeader />
                <NoteAppBody notes={this.state.notes} addNote={this.onAddNoteHandler} onDelete={this.onDeleteHandler}/>
            </div>
        );
    }
}

export default NoteApp;