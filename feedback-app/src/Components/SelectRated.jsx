import React, { useEffect, useState } from 'react'

function SelectRated({ selectedRating_prop, editFeedback }) {
    const [selected, setSelected] = useState(5);

    useEffect (() => {
      if(editFeedback.edit === true) {
         selectedRating_prop(editFeedback.items.rating)
      }
    }, [editFeedback])


    const changehandler = (e) => {
      //   console.log("rating",e.target.value);
        setSelected(+e.target.value);
        selectedRating_prop(+e.currentTarget.value)
        e.preventDefault();
    }

  return (
    <div>
           <ul className='rating m-5 flex gap-2'>
              <li>
                 <label htmlFor="num1">1</label>
                 <input type="radio" name="rating" onChange={changehandler} id="num1" value={"1"} checked={selected === 1} />
              </li>
              <li>
                 <label htmlFor="num2">2</label>
                 <input type="radio" name="rating" onChange={changehandler} id="num2" value={"2"} checked={selected === 2} />
              </li>
              <li>
                 <label htmlFor="num3">3</label>
                 <input type="radio" name="rating" onChange={changehandler} id="num3" value={"3"} checked={selected === 3} />
              </li>
              <li>
                 <label htmlFor="num4">4</label>
                 <input type="radio" name="rating" onChange={changehandler} id="num4" value={"4"} checked={selected === 4} />
              </li>
              <li>
                 <label htmlFor="num5">5</label>
                 <input type="radio" name="rating" onChange={changehandler} id="num5" value={"5"} checked={selected === 5} />
              </li>
              <li>
                 <label htmlFor="num6">6</label>
                 <input type="radio" name="rating" onChange={changehandler} id="num6" value={"6"} checked={selected === 6} />
              </li>
              <li>
                 <label htmlFor="num7">7</label>
                 <input type="radio" name="rating" onChange={changehandler} id="num7" value={"7"} checked={selected === 7} />
              </li>
              <li>
                 <label htmlFor="num8">8</label>
                 <input type="radio" name="rating" onChange={changehandler} id="num8" value={"8"} checked={selected === 8} />
              </li>
              <li>
                 <label htmlFor="num9">9</label>
                 <input type="radio" name="rating" onChange={changehandler} id="num9" value={"9"} checked={selected === 9} />
              </li>
              <li>
                 <label htmlFor="num10">10</label>
                 <input type="radio" name="rating" onChange={changehandler} id="num10" value={"10"} checked={selected === 10} />
              </li>
              
              
              
              
           </ul>
    </div>
  )
}

export default SelectRated;
