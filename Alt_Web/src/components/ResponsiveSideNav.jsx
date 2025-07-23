import React, { useState } from 'react'
import { menuOutline, closeOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import DisplayResSideNav from './DisplayResSideNav';

const ResponsiveSideNav = () => {

    const [open, setOpen ] = useState(false)


  return (
    <>
      <div className='md:hidden block pt-10 pl-5 absolute' onClick={() => setOpen(!open)}>
        {
            open ? (
                <IonIcon icon={closeOutline} size='large' />
            ) : <IonIcon icon={menuOutline} size='large' />
        }
      </div>
      <DisplayResSideNav open={open}/>
    </>
  )
}

export default ResponsiveSideNav
