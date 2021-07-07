import React from 'react';
import { FaUserAlt, FaMinusCircle } from 'react-icons/fa';
import DeleteModalContainer from './delete_modal_container';



class CommentsShow extends React.Component {
    constructor(props) {
        super (props)
        this.state = {
            deleteModalShow: false,
            commentToDelete: undefined
        }
    
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleModalShow = this.toggleModalShow.bind(this);
    }


    componentDidMount() {
        this.props.fetchViewComments(this.props.viewId)
    }

    compareComments(a, b) {
        return new Date(b.date) - new Date(a.date);
    }

    handleDelete(comment){
        this.setState({deleteModalShow: true,
                        commentToDelete: comment})
        
    }

    toggleModalShow(){
        this.setState({deleteModalShow: false})
    }

    render() {

        const { comments } = this.props;
        const { currentUser } = this.props;
        const currentUserEmail = currentUser ? currentUser.email : undefined;
        let commentsArrayCopy = comments.slice(0).sort(this.compareComments);
        return (
            <div className="comment-section">
                {this.state.deleteModalShow && <DeleteModalContainer comment = {this.state.commentToDelete}
                                                                     trigerFunction = {this.toggleModalShow}/>}
                <div className="show-comment-container">
                    {!commentsArrayCopy.length && <div className="comment-place-holder">There are no comments for this view</div>}
                    <ul>
                        {
                        commentsArrayCopy.map((comment, idx) => (
                                                <li key={idx}>
                                                <div className="show-comment-user">
                                                    <FaUserAlt/> {comment.user.name}:
                                                </div>
                                                <div className="show-comment-text">
                                                    {((currentUserEmail === "admin@admin.com") || 
                                                        (currentUserEmail === comment.user.email)) &&
                                                        this.props.showDeleteIcon &&
                                                        <button className="delete-comment-button"onClick={() => this.handleDelete(comment)}>
                                                        <FaMinusCircle className="delete-icon"/></button>} {comment.text}
                                                </div>
                                                <br></br>
                                                </li>))
                        }
                    </ul>
                </div>
            </div>
        )
    }




};

export default CommentsShow;