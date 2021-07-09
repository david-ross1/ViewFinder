import React from 'react';

class DeleteModal extends React.Component {
    constructor(props) {
        super(props)

        this.handleNo = this.handleNo.bind(this);
        this.handleYes = this.handleYes.bind(this);

    }

    handleNo(e) {
        this.props.trigerFunction();
    }

    async handleYes(e) {
        let data = {
            commentId: this.props.comment._id,
            viewId: this.props.viewId
        }
        await this.props.deleteComment(data);
        await this.props.fetchViewComments(this.props.viewId)
        this.props.trigerFunction();
    }

    render() {
        const commentText = this.props.comment.text
        return (
            <div>
                <div className="delete-modal-overlay"></div>
                <div className="delete-modal-container">
                    <p className="delete-modal-confirm-sentence">Are you sure you want to delete this comment?</p>
                    <p className="delete-modal-comment">{(commentText.length < 40) ? `"${commentText}"`: `" ${commentText.slice(0, 40)}..."`}</p>
                    <br />
                    <br />
                    <button className="delete-modal-cancel-button" onClick={this.handleNo}>Cancel</button>
                    <button className="delete-modal-confirm-button" onClick={this.handleYes}>Confirm Delete</button>
                </div>

            </div>
        )
    }
};

export default DeleteModal