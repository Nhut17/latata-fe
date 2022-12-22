import React,{useState,useEffect} from 'react'
import { AddressContext } from '../../context/AddressContext'
import ProvinceSelect from './ProvinceSelect'
import CitySelect from './CitySelect'
import WardSelect from './WardSelect'
import StreetSelect from './StreetSelect'
import { useDispatch } from 'react-redux'
import { getProvince } from '../../redux/ProvinceVN/provinceVNSlice'



const AddressSelect = () => {

    const [provinces,setProvinces] = useState([])
    const [selectedProvince,setSelectedProvince] = useState(0)
    const [selectedCity,setSelectedCity] = useState(0)
    const [selectedWard,setSelectedWard] = useState(0)
    const [indexDistrict,setIndexDistrict] = useState(0)

    const [searchProvince,setSearchProvince] = useState('')
    const [listCity,setListCity] = useState([])
    const [listWard,setListWard] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {

        fetch('https://provinces.open-api.vn/api/d?depth=2')
            .then(res => res.json())
            .then(province => {
                // setProvinces(province)
                // setListCity([province[0]])
                // setListWard([province[0]])
                console.log(province)
            })


        dispatch(getProvince())

    },[])


    useEffect(() => {
        const lis = provinces?.filter(val => val.code === selectedProvince)
        setListCity(lis)
    },[selectedProvince])

    useEffect(() => {
       
        const indx = listCity[0]?.districts.findIndex(val => val.code === selectedCity)
        setIndexDistrict(indx)
    },[selectedCity])

    


    const search = (data) => {
        return data?.filter(val => val.name.toLowerCase().includes(searchProvince.toLowerCase()))
    }

    const value = {
        provinces,
        setSearchProvince,
        search,
        selectedProvince,
        setSelectedProvince,
        searchProvince,
        listCity,
        setSelectedCity,
        selectedWard,
        setSelectedWard,
        listWard,
        indexDistrict,
    }


  return (
    <div className="address"  >

       <AddressContext.Provider value={value} >

         <ProvinceSelect />
         <CitySelect />
         <WardSelect />
         <StreetSelect />

       </AddressContext.Provider>
    </div>
  )
}

export default AddressSelect