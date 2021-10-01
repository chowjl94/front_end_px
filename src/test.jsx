// return(
//     <div className="py-5">
//     <h2 className="text-xl">Movie Comments</h2>
//     {!data || (data && data.length === 0) ? (
//         <p>No comments</p>
//     ): (

//        data.map((comment,index) => (
//       <div
//       key={index}
//       className="flex justify-between items-center px-4 sm:px-6 py-3 bg-white">
//       <p>{`${index+1}.`}</p>
//       <p>{comment.content}</p>
//       <p>rated:{comment.rating}</p>
//       {onDelete && <DeleteButton onClick={onDelete} />}
//       </div>
      
      
      
//     ))
//   )}





//   <div  className=" flex-initial  bg-white  w-full  lg:max-w-md  border-b border-gray-100">
//       <div className="flex flex-col h-full">
//       <div className="py-6 px-4 bg-pink-700 sm:px-6">
//         <div className="flex items-center justify-between">
//           <h2 className="text-lg font-medium text-white">Your Cart</h2>
//         </div>
//         <div className="mt-1">
//         <p>items in your cart</p>
//         </div>
//       </div>
//     {!isLoading && cartListings &&
//     cartListings.map((item,index)=>(
//       <CartItems
//       key={index}
//       item={item}
//       onClick= {(removeItem(item.listing._id,auth))}
      
//   />
//     ))}

    
//     {
//     ((!cartListings) || (cartListings && cartListings.length === 0)) &&
//      <CartEmpty />
//     }
//     </div>
//         </div> 