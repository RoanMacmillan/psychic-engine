import React from 'react';
import photoGallery from '@/data/photos';
import Image from 'next/image';

const Test = () => {
    return (
        <>

        <div className='columns-3 gap-4'>

        <div className='bg-red-200'>

        <Image 
        
        alt='ff'
        width={200}
        height={200}
        src={photoGallery[0].url}
        />

        </div>
        <div className='bg-red-200'>

        <Image 
        
        alt='ff'
        width={200}
        height={200}
        src={photoGallery[5].url}
        className='row-start-1 row-end-2  col-start-1 col-end-2'
        />

        </div>

        <div className='bg-red-200'>

        <Image 
        
        alt='ff'
        width={200}
        height={200}
        src={photoGallery[4].url}
        className='row-start-1'
        />

        </div>

        <div className='bg-red-200'>

        <Image 
        
        alt='ff'
        width={200}
        height={200}
        src={photoGallery[1].url}
        />

        </div>

        <div className='bg-red-200'>

        <Image 
        
        alt='ff'
        width={200}
        height={200}
        src={photoGallery[2].url}
        />

        </div>

        <div className='bg-red-200'>

        <Image 
        
        alt='ff'
        width={200}
        height={200}
        src={photoGallery[3].url}
        />

        </div>




        </div>
            
        </>
    );
};

export default Test;



// export const data = 






