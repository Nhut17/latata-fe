import React,{useState} from 'react'
import { list_brand } from '../data'
import { Link } from 'react-router-dom';

const ListBrand = () => {

 const [invisible, setInvisible] = useState(true);

  const [viewMore, setViewMore] = useState(9);

  const handleShowViewMore = () => {
    setInvisible(false);
    setViewMore((prev) => prev + (list_brand.length - 9));
  };

  return (
    <section className="list-brand">
    <h2>THƯƠNG HIỆU HÀNG ĐẦU</h2>
    <div className="listBrand">
      {list_brand.slice(0, viewMore).map((brand) => (
        <div key={brand.id}  className='item'>
          <img src={brand.url} />
        </div>
      ))}

      {invisible && (
        <button className="btnViewMore" onClick={handleShowViewMore}>
          Xem thêm
        </button>
      )}
    </div>
  </section>
  )
}

export default ListBrand