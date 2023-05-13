import React from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import '../AdminEvent.scss'
import UploadImage from './UploadImage';
const ModalBannerHome = ({showBannerHome,setShowBannerHome}) => {

    const handleClickBannerHome = () => {
        setShowBannerHome(false)
    }
    return (
        <div className="modal-banner-home">
            <Modal
                open={showBannerHome}
                onClose={handleClickBannerHome}
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'custom-modal-detail-order',
                }}
            >
                <p style={{fontWeight : 'bold', marginBottom : '10px'}}>Banner chính trang chủ: </p>
                <UploadImage width={850} height={200}/>
                

                <div className="save-image">
                    <button>Lưu</button>
                </div>
            </Modal>
        </div>
    )
}

export default ModalBannerHome