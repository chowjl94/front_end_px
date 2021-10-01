import { LoginForm, useAuthState,LogoutButton, useAuth } from "domains/auth";
import { useState, useRef, useEffect } from "react";
import { ListingItem, useListings, ListingCartItem, useCartListings,addToCart } from "domains/marketplace";

import { CartItems,CartEmpty } from "domains/marketplace/components/cart-item";
import * as React from "react";
import { ArrowRightIcon ,ArrowLeftIcon} from "@heroicons/react/solid";
import { IconButton } from "components/icon-button";



const RightButton = (props) => {
  return (
    <IconButton title="next" onClick={props.onClick}>
      <ArrowRightIcon className="w-5 h-5 text-gray-400" />
      {props.text}
    </IconButton>
  );
};

const LeftButton = (props) => {
  return (
    <IconButton title="next" onClick={props.onClick}>
      <ArrowLeftIcon className="w-5 h-5 text-gray-400" />
      {props.text}
    </IconButton>
  );
};

const getListings = (page, signal) =>
  fetch(`https://ecomm-service.herokuapp.com/marketplace?page=${page}`, {
    signal
  }).then((res) => res.json());

  
export const MarketplacePublic = () => {
  const auth = useAuthState()
  const [listings, setListings] = useState(undefined);
  const [page, setPage] = useState(1);
  const {isLoading ,cartListings, addItem, removeItem} = useCartListings();
  const [totalvalue, setTotalValue] = useState(0)
  

  const loadListing = (page,signal) =>
  getListings(page, signal).then((data) => setListings(data));
  
  useEffect(() => {
    const ab = new AbortController();
    (auth.status === "authenticated") && loadListing(page, ab.signal);
    return () => {
      ab.abort();
    };
  }, [page,auth.status]);


  useEffect(() => {
    const amounts = []
    cartListings.forEach((item) => amounts.push(item.listing.price * item.quantity))


    if (amounts.length === 0) {
        setTotalValue(0)
    } else {
        setTotalValue(amounts.reduce((prev, next) => prev + next))
    }

}, [cartListings]);
  

  return (
  <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
  {auth.status==='anonymous' && (
    <LoginForm
      onSuccess={(accessToken) => {
        auth.login(accessToken)
      }}
    />
  )}

  {auth.status === "authenticated" &&

       <main className="bg-gray-50 lg:flex">

          <div className="flex-1">
            <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
              <div className="text-right">
                <LogoutButton />
              </div>
              <div className="sm:flex sm:flex-col sm:align-center">
                <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
                  Marketplace
                </h1>
              </div>
        <div className="flex justify-between">
        <LeftButton
          text={'Prev'}
          onClick={() => setPage(page - 1)}
        />
        <RightButton
          text={'Next'}
          onClick={() => setPage(page + 1)}
        />
        </div>
        <div
          className="
          grid
          md:grid-cols-2
          gap-x-4 gap-y-8
          xl:grid-cols-3 xl:gap-x-6
        "
        >
          {listings &&
            listings.map((item) => (
              <ListingItem
                imageUrl={item.imageUrl}
                title={item.title}
                description={item.description}
                price={item.price}
                availableStock={item.numOfStock}                
                onlyOne={item.availability === "single-item"}
                onAddToCart={() => addItem(item._id, auth)}              
                key={item._id}
              />
            ))}
        </div>
      </div>
    </div>

    {/* <!-- =============== cart start ============ --> */}
    <div  className=" flex-initial  bg-white  w-full  lg:max-w-md  border-b border-gray-100">
      <div className="flex flex-col h-full">
      <div className="py-6 px-4 bg-pink-700 sm:px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-white">Your Cart</h2>
        </div>
        <div className="mt-1">
        <p>items in your cart</p>
        </div>
      </div>
    {((!cartListings) || (cartListings && cartListings.length === 0))
    ?
    (<CartEmpty/>)
    :
    (!isLoading && cartListings && 
      cartListings.map((item)=>(
      <CartItems 
      key={item._id} 
      item={item}
      onClick={()=>(removeItem(item.listing._id,auth))}
      // onClick={()=>(console.log('delete'))}

      />
    )))
    }
    {
    isLoading && <h3 className="text-center text-pink-700 mt-10">Updating your cart...</h3>
    }
    <span>
        Total 
        <span className="text-3xl">
        $
           <span>{totalvalue}</span>
           </span>
    </span>
    </div>
        </div> 

  
  </main>
  }
  </div>
);
};

