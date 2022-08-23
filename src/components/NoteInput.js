import React from "react";
import { showFormattedDate } from "../utils/index";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            archived: false,
            createdAt: showFormattedDate,
        }

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onTitleChangeHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value.length <= 50 ? event.target.value : event.target.value.substring(0, 50),
            }
        });
    }

    onBodyChangeHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <form className="note-input" onSubmit={this.onSubmitHandler}>
                <small className="note-input__title__char-limit">Limit Karakter: <span>{50 - this.state.title.length}</span></small>
                <input className="note-input__title" type="text" placeholder="Ini adalah judul ..." value={this.state.title} onChange={this.onTitleChangeHandler} />
                <input className="note-input__body" type="textarea" placeholder="Tuliskan catatanmu disini ..." value={this.state.body} onChange={this.onBodyChangeHandler} />
                <button type="submit">Buat</button>
            </form>
        )
    }
}

export default NoteInput;