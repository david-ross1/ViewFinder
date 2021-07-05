import React from 'react';

class DeleteModal extends React.Component {
    constructor(props) {
        super(props)

        this.handleNo = this.handleNo.bind(this);
        this.handleYes = this.handleYes.bind(this);

    }

    handleNo() {

    }

    handleYes() {

    }
    render() {

        return (
            <div>
                <p className="confirm-sentence">Are you sure you want to delete this comment?</p>


            </div>


        )

    }






};

export default DeleteModal