import React from 'react'



const VoucherItem = ({data,selectedVoucher,setSelectedVoucher,setSelectedNameVoucher}) => {
    const dateExpire = new Date(data.expiredIn)
    const options = {
        timeZone: 'Asia/Bangkok',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
    //   const [selectedOption, setSelectedOption] = useState('');

    // const handleOptionChange = (event) => {
    // const selectedValue = event.target.value;
    // setSelectedOption(selectedValue);
    // }




    


  return (
    <div className='bg-voucher-item flex a-center'>
        <div className="select-voucher" style={{marginRight : '10px'}} key={data._id}>
            <input  type="radio" name="" id="voucher-item-input"
                    checked={selectedVoucher == data.voucher}
                    onChange={()=> {setSelectedVoucher(data.voucher)
                                    setSelectedNameVoucher(data.voucher)    }}
                    style={{cursor : 'pointer'}}
                  
                    />
        </div>
       
        <div className='voucher-item' >
            <div className="name-voucher">
                <p>{data.content}</p>
            </div>
            <div className="percent">
                <span><b>Giảm giá</b>: {data.sales}%</span>
            </div>
            <div className="code-voucher">
                <p><b>MÃ GIẢM GIÁ</b>: <b>{data.voucher}</b></p>
            </div>
            <div className="time-voucher">
                <p>Hiệu lực đến {dateExpire.toLocaleDateString('en-US',options)}</p>
            </div>
        </div>
      
    </div>
  )
}

export default VoucherItem
