import React from 'react'

const PizzaItem = ({title, small, medium, large, tags}) => {
  return (
    <div className='app__menuitem'>
    <div className='app__menuitem-head'>
        <div className='app__menuitem-name'>
            <p className='p__cormorant' style={{color: '#DCCA87'}}>{title}</p>
        </div>

        <div className='app__menuitem-dash'></div>

        <div className='app__menuitem-name'>
            <p className='p__cormorant'>sm {small}</p>
            <p className='p__cormorant'>md {medium}</p>
            <p className='p__cormorant'>lg {large}</p>
        </div>

    </div>
    <div className='app__menuitem-sub'>
        <p className='p__opensans' style={{color: '#AAA'}}>{tags}</p>
    </div>
</div>
  )
}

export default PizzaItem