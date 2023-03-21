import '../AdminCate.scss'
import React, { useEffect, useRef, useState } from 'react';
const Specification = () => {
    
    const [tags, setTags] = useState([
        "HTML", "CSS", "JavaScript"
    ])

    function handleKeyDown(e){
        if(e.key !== 'Enter') return
        const value = e.target.value
        if(!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
    }

    function removeTag(index){
        setTags(tags.filter((el, i) => i !== index))
    }
    return (
        <>

                <div className="box-specifications">
                    <form>
                        <div className="input-group">
                            <span >Danh mục : </span>

                            <select name="" id="">
                                
                            </select>
                        </div>
                        <div className="list-specifications">
                            <span >Thông số kĩ thuật : </span>
                           
                            <div className="specification-selected">
                                {/* <TagsInput
                                    value={selected}
                                    onChange={setSelected}
                                    name="specification"
                                    placeHolder="+ Thêm"
                                    
                                /> */}

                               
                            <div className="tags-input-container">
                                        { tags.map((tag, index) => (
                                            <div className="tag-item" key={index}>
                                                <span className="text">{tag}</span>
                                                <span className="close" onClick={() => removeTag(index)}>&times;</span>
                                            </div>
                                        )) }
                                        <input onKeyDown={handleKeyDown} type="text" className="tags-input" placeholder="Nhập thông số" />
                            </div>

                            </div>

                            <div className="submit">
                                <button>Lưu thay đổi</button>
                            </div>
                        </div>

                    </form>
                </div>
        </>
    )
}

export default Specification