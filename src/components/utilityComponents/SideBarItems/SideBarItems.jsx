import React, { useState, useRef } from 'react'


export default function SideBarItems({ categories, activeCat, setActiveCat }) {
    const [activeItem, setActiveItem] = useState('');
    const dashMenuRef = useRef([]);
    // const cats = categories.map(cat =>
    //   <li
    //     key={cat}
    //     className={cat === activeCat ? 'active' : ''}
    //     // FYI, the below will also work, but will give a warning
    //     // className={cat === activeCat && 'active'}
    //     onClick={() => setActiveCat(cat)}
    //   >
    //     {cat}
    //   </li>
    // );
    return (
      <ul className="SideBar" style={{border:'1px solid rgb(99, 22, 255)'}}>
        {/* {cats} */}
      </ul>
    );
  }