import React from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import '../AdminEvent.scss'
import UploadImage from './UploadImage';
import { CloudUploadOutlined } from '@ant-design/icons'
const ModalExtraBanner = ({showExtraBanner,setShowExtraBanner}) => {
    const handleClickExtraBanner = () => {
        setShowExtraBanner(false)
    }
    return (
        <div className="modal-banner-home">
                <Modal
                    open={showExtraBanner}
                    onClose={handleClickExtraBanner}
                    classNames={{
                        overlay: 'customOverlay',
                        modal: 'custom-modal-detail-order',
                    }}
                >
                    <p style={{fontWeight : 'bold', marginBottom : '10px'}}>Banner phụ: </p>
                    <UploadImage width={850} height={150} />              
                    <UploadImage width={850} height={150}/>

                    <div className="save-image">
                        <button>Lưu</button>
                    </div>
                </Modal>
            </div>
    )
}

export default ModalExtraBanner