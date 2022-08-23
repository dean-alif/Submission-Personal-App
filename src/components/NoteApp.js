import React from "react";
import { getInitialData, showFormattedDate } from "../utils/index";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppBody from "./NoteAppBody";
import NoteArchivedList from "./NoteArchivedList";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchivedHandler = this.onArchivedHandler.bind(this);
        this.onShowArchivedHandler = this.onShowArchivedHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchivedHandler(id) {
        const notes = this.state.notes.map(note => {
            if (note.id === id) {
                note.archived = true;
            }
            return note;
        });
        this.setState({ notes });
    }

    onShowArchivedHandler(id) {
        const notes = this.state.notes.map(note => {
            if (note.id === id) {
                note.archived = false;
            }
            return note;
        });
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
                        archived: false,
                        createdAt: showFormattedDate(createdAt),
                    }
                ]
            }
        });
    }

    render() {
        return (
            <div className="note-app">
                <NoteAppHeader searchNote={this.onSearchNoteHandler}/>
                <NoteAppBody notes={this.state.notes.filter(note => note.archived === false)} addNote={this.onAddNoteHandler} onDelete={this.onDeleteHandler} onArchieve={this.onArchivedHandler} />
                <NoteArchivedList notes={this.state.notes.filter(note => note.archived === true)} onDelete={this.onDeleteHandler} onArchieve={this.onShowArchivedHandler} />
            </div>
        );
    }
}

export default NoteApp;