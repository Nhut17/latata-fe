import React, { useState } from 'react'
import useLocationForm from "./useLocationForm";
import Select from "react-select";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import '../../sass/cart/checkoutCart.scss'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addAddress } from '../../redux/address/addressSlice';
const ModalAddress = ({ showAddressItem, setShowAddressItem }) => {
    const handleClickAddressItem = () => {
        setShowAddressItem(false)
    }

    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [address,setAddress] = useState('')

    const dispatch = useDispatch()

    const { handleSubmit, register } = useForm()

    const [validateForm, setvalidateForm] = useState({
        name: "",
        phone: "",
        city: "",
        district : "",
        ward : "",
        street: ""
      });
    const {
        state,
        onCitySelect,
        onDistrictSelect,
        onWardSelect,
        onSubmit
      } = useLocationForm(false);
    
      const {
        cityOptions,
        districtOptions,
        wardOptions,
        selectedCity,
        selectedDistrict,
        selectedWard
      } = state;

    // console.log(selectedCity)
    
      const handleOnSubmit = (e) =>{
            e.preventDefault()
          
            
            const data = {
                name: name,
                phone: phone,
                address: address + ' ,' + selectedWard.label + ' ,' + selectedDistrict.label + ' ,' + selectedCity.label
            }

            console.log(data)

            dispatch(addAddress(data))
            setShowAddressItem(false)

           
      }

      return (
        <Modal
            open={showAddressItem}
            onClose={handleClickAddressItem}
            classNames={{
                overlay: 'customOverlay',
                modal: 'custom-modal-detail-order',
            }}
        >

            <div className="form-address">
                <form
                    onSubmit={handleOnSubmit}
                    
                    >
                    <h3>Thêm địa chỉ mới</h3>

                    <div className="select-group">

                    <input name='name' type="text" placeholder='Nhập họ tên'
                            onChange={(e) => setName(e.target.value)} required    />

                    <input 
                            style={{
                                marginBottom: '20px'
                            }}
                            name='phone' type="text" placeholder='Nhập số điện thoại'
                            onChange={(e) => setPhone(e.target.value)} required  />

                        <Select
                        name="cityId"
                        key={`cityId_${selectedCity?.value}`}
                        isDisabled={cityOptions.length === 0}
                        options={cityOptions}
                        onChange={(option) => onCitySelect(option)}
                        placeholder="Tỉnh/Thành"
                        defaultValue={selectedCity}
                        required
                        />

                        <br />

                        <Select
                        name="districtId"
                        key={`districtId_${selectedDistrict?.value}`}
                        isDisabled={districtOptions.length === 0}
                        options={districtOptions}
                        onChange={(option) => onDistrictSelect(option)}
                        placeholder="Quận/Huyện"
                        defaultValue={selectedDistrict}
                        required
                        />
                        <br />
                        <Select
                        name="wardId"
                        key={`wardId_${selectedWard?.value}`}
                        isDisabled={wardOptions.length === 0}
                        options={wardOptions}
                        placeholder="Phường/Xã"
                        onChange={(option) => onWardSelect(option)}
                        defaultValue={selectedWard}
                        required
                        />

                        <input name='address' type="text" placeholder='Nhập địa chỉ cụ thể'
                            onChange={(e) => setAddress(e.target.value)}  required/>

                        <div className="default">
                            <input type="checkbox" style={{width : 'auto'}}/> Đặt làm địa chỉ mặt định
                            
                        </div>
                    </div>

                    <button
                        type="submit"
                    >
                        Xác nhận
                    </button>
                    </form>
            </div>
        </Modal >
      )
}

export default ModalAddress
