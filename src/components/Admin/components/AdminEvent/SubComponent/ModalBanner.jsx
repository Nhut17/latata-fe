import React from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import '../AdminEvent.scss'
import UploadImage from './UploadImage';
const ModalBanner = ({showBanner,setShowBanner}) => {
    const handleClickBanner = () => {
        setShowBanner(false)
    }
    return (
        <div className="modal-banner">
            <Modal
                    open={showBanner}
                    onClose={handleClickBanner}
                    classNames={{
                        overlay: 'customOverlay',
                        modal: 'custom-modal-detail-order',
                    }}
                >
                    <UploadImage/>
                    <UploadImage/>
                    <UploadImage/>

                    <div className="save-image">
                        <button>Lưu</button>
                    </div>
            </Modal>
        </div>
    )
}

export default ModalBanner