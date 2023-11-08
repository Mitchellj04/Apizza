import React from 'react'


const SubHeading = ({title}) => {
  return (
    <div className='app__subheading'>
        <div className=''>
            <p className='p__cormorant'>{title}</p>
        </div>
    </div>
  )
}

export default SubHeading