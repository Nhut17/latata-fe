import React from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import '../AdminEvent.scss'
import UploadImage from './UploadImage';
const ModalBannerCate = ({showBannerCate,setShowBannerCate}) => {
    const handleClickBannerCate = () => {
        setShowBannerCate(false)
    }
    return (
        <div className="modal-banner-cate">
            <Modal
                    open={showBannerCate}
                    onClose={handleClickBannerCate}
                    classNames={{
                        overlay: 'customOverlay',
                        modal: 'custom-modal-detail-order',
                    }}
                >
                    
                    <div className="banner-slider">
                        <p style={{fontWeight : 'bold', marginBottom : '10px'}}>Banner slider: </p>
                        <UploadImage width={700} height={180}/>
                        <UploadImage width={700} height={180}/>
                        <UploadImage width={700} height={180}/>
                        <UploadImage width={700} height={180}/>
                    </div>

                    <div className="extra-banner">
                        <p style={{fontWeight : 'bold', marginBottom : '10px'}}>Banner phụ: </p>
                      
                        <UploadImage width={350} height={90}/>
                        <UploadImage width={350} height={90}/>
                      

                    </div>


                    <div className="save-image">
                        <button>Lưu</button>
                    </div>
            </Modal>
        </div>
    )
}

export default ModalBannerCate