import React from 'react'

const Tags = ({data}) => {

    // const handleRemoveTag = (id) => {
    //     const data = {
    //         id,
    //         id_cate: currentCate
    //     }
    //     console.log(data)
    //     // removeTag(index)

    //     dispatch(deleteInfoTech(data))
    // }

  return (
    <div className="tag-item" key={data.index}>
    <span className="text">{data.title}</span>
    <span className="close" 
            // onClick={() => handleRemoveTag(data._id)}
            >&times;</span>
</div>
  )
}

export default Tags
