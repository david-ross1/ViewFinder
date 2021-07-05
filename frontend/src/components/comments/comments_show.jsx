import React from 'react';
import { FaUserAlt, FaMinusCircle } from 'react-icons/fa'


class CommentsShow extends React.Component {
    constructor(props) {
        super (props)
    
    this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.fetchViewComments(this.props.viewId)
    }

    compareComments(a, b) {
        return new Date(b.date) - new Date(a.date);
    }

    handleDelete(comment){
        let data = {
            commentId: comment._id,
            viewId: this.props.viewId
        }
        this.props.deleteComment(data);
    }

    render() {

        const { comments } = this.props;
        const { currentUser } = this.props;
        const currentUserName = currentUser ? currentUser.name : undefined;
        let commentsArrayCopy = comments.slice(0); 
        return (
            <div>
                <ul className="sidebar-comment-container">
                    {
                    commentsArrayCopy.sort(this.compareComments)
                                        .map((comment, idx) => (
                                            <li key={idx}>
                                            <div className="sidebar-comment-user">
                                                <FaUserAlt/> {comment.user.name}:
                                            </div>
                                            <div className="sidebar-comment-text">
                                                {((currentUserName === "admin") || (currentUserName === comment.user.name)) &&
                                                    <button onClick={() => this.handleDelete(comment)}><FaMinusCircle className="delete_icon"/></button>}  {comment.text}
                                            </div>
                                            <br></br>
                                            </li>))
                    }
                </ul>
            </div>
        )
    }




};

export default CommentsShow;