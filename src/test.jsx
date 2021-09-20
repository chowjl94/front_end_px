{/* <CartItems
key={item.listing_id}
imageUrl={item.listing.imageUrl}
title={item.listing.title}
price={item.listing.price}
quantity={item.listing.quantity}
onClick= {(removeItem(item.listing._id,auth))}



export const CartItems = (props) => {  

    const { imageUrl, title, price,quantity,listing } = listing;
    return (

            <li className="flex px-4 sm:px-6 py-4">
                <img src={imageUrl} alt="" className="h-10 w-10 rounded-sm"/>
                  <div className="flex-1 flex justify-between items-center ml-3">
                    <div>
                        <p className="text-sm font-medium text-gray-900">{title}</p>
                        <p className="text-sm text-gray-500">{price} x {quantity}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div>
                        Total ${Number(price) * Number(quantity)}
                        </div>
                    </div>
                    <DeleteButton
                        onClick={onClick}
                    />
                </div>
            </li>
   
        );
    }; */}







