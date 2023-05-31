import React from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import '../AdminEvent.scss'
import UploadImage from './UploadImage';
import { CloudUploadOutlined } from '@ant-design/icons'

const ModalSliderHome = ({showSliderHome,setShowSliderrHome}) => {

    const handleClickSliderHome = () => {
        setShowSliderrHome(false)
    }
    return (
        <div className="modal-slider-home">
            <Modal
                open={showSliderHome}
                onClose={handleClickSliderHome}
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'custom-modal-detail-order',
                }}
            >
                <p style={{fontWeight : 'bold', marginBottom : '10px'}}>Banner slider trang chủ: </p>
                <UploadImage width={500} height={150} />
                
                

                

                <div className="save-image">
                    <button>Lưu</button>
                </div>
            </Modal>
        </div>
    )
}

export default ModalSliderHome