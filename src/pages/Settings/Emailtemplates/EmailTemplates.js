import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import './editor.css';
import { Button } from 'reactstrap';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const styles = {
    editor: {
        border: '1px solid gray',
        minHeight: '6em'
    }
};

class EditorPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            from: "",
            to: "",
            subject: "",
            key: "",
            text: ""
        };
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    sendMail = () => {
        const { to, from, subject, key, text } = this.state;
        const html = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
        api.sendMail({
            to, from, subject, html, key, text
        }).then((res) => {
            console.log(res);
            notification.open({
                message: res.data.message,
            });
        },
            err => {
                console.log(err);
                notification[error]({
                    message: err.data.message,
                });
            })
    }

    render() {
        const { editorState } = this.state;

        return (
            <>
              
                <div className="main-box">
                    <div className="mb-3">
                        <label>Subject</label>
                        <input className="form-control" />
                    </div>
                    <div className="m-10 mb-3"
                        style={styles.editor}
                        onClick={this.focusEditor}>
                        <Editor
                            editorState={editorState}
                            wrapperClassName="demo-wrapper"
                            editorClassName="demo-editor"
                            onEditorStateChange={this.onEditorStateChange}
                        />
                    </div>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-primary my-2 float-end" onClick={() => this.sendMail()}>Send</button>
                    </div>
                </div>
            </>
        );
    }
}

export default EditorPage;
