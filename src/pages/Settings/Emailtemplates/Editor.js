import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

import { notification } from 'antd';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './style.css';
import 'antd/dist/antd.css';

const styles = {
    editor: {
        border: '1px solid gray',
        minHeight: '6em',
    },
};

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            from: '',
            to: '',
            subject: '',
            key: '',
            text: '',
        };
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    sendMail = () => {
        const { to, from, subject, key, text } = this.state;
        const html = draftToHtml(
            convertToRaw(this.state.editorState.getCurrentContent())
        );
        api
            .sendMail({
                to,
                from,
                subject,
                html,
                key,
                text,
            })
            .then(
                (res) => {
                    console.log(res);
                    notification.open({
                        message: res.data.message,
                    });
                },
                (err) => {
                    console.log(err);
                    notification[error]({
                        message: err.data.message,
                    });
                }
            );
    };

    render() {
        const { editorState } = this.state;

        return (
            <div className="main-box">
                <div className="m-10" style={styles.editor} onClick={this.focusEditor}>
                    <Editor
                        editorState={editorState}
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor"
                        onEditorStateChange={this.onEditorStateChange}
                    />
                </div>
                {/* <Button className="m-10" onClick={() => this.sendMail()}>
                    Send
                </Button> */}
            </div>
        );
    }
}

export default Editor;
