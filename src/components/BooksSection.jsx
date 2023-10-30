import React from 'react'
const BooksSection = ({data}) => {
   // Filter the data array to include only available books
   const availableBooks = data.filter(item => item.available);

  return (
    <div className='d-flex justify-content-around align-items-center flex-wrap my-3 '>
      {/* something should be available and book is marked as available in database */}
     {availableBooks && availableBooks.map((item,index)=>(
        <div className='mx-1 my-2' style={{width:"200px", height:"350px ", backgroundColor:"yellow", border:"1px solid black",  borderRadius:"11px"}}>
            <div>
                <img style={{width:"200px", height:"240px", borderTopLeftRadius:"10px", borderTopRightRadius:"10px"}} className="img-fluid" src={item.image} alt="/" />
            </div>
            {/* We can see at max 20 words of title */}
            <h6 style={{fontSize:"15px"}} className='text-dark px-2 my-1'>{item.title.slice(0,20)}...</h6>
            <h4 style={{fontSize:"13px", textAlign:'center',color:"blue" }} className=' px-2 my-1' ><b>{item.genres}</b></h4>
            <b style={{fontSize:"25px", color:"red"}} className='m-0 px-2'>Rs.{item.price}</b>
        </div>
     ))}
    </div>
  )
}

export default BooksSection
