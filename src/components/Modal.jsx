import React from 'react';
import Card from './Card';

const Modal = ({article, idmodal}) => {
  return (
    <div className='modal fade' id={idmodal} tabIndex="-1" role='dialog' aria-labelledby='articleModalLabel' aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="articleModalLabel">The News</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                </button>
                </div>
                <div className="modal-body">
                    <Card lengthWords="2000" category="name category" article={article}/>
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal