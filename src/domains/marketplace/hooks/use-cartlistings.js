// import * as React from "react";
import { useEffect,useState } from "react";
import { useAuth } from "domains/auth";

///hooks for getting cart items

export const getCartListings = (auth) =>
    fetch("https://ecomm-service.herokuapp.com/marketplace/cart/items", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${auth.accessToken}`,
            accept: "application/json"
        }
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(res.statusText);
    });

export const addToCart = (listingId, auth) =>
    fetch("https://ecomm-service.herokuapp.com/marketplace/cart/items", {
      method: "POST",
      body: JSON.stringify({
        quantity: 1,
        listingId,
      }),
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.accessToken}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(res.statusText);
    });

const removeFromCart = (listingId, auth) => 
    fetch(`https://ecomm-service.herokuapp.com/marketplace/cart/items/${listingId}`, {
        method: "DELETE",
        headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.accessToken}`,
        },
    }).then((res) => {
        if (res.ok) {
        return res.json();
        }
        throw new Error(res.statusText);
    });

export const useCartListings = () => {
  const [cartListings, setCartListings] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  
  const auth = useAuth();


  const loadListingsCart = (auth) => {
    setIsLoading(true)
    console.log('loaded')
    getCartListings(auth)
      .then(
        (data) => setCartListings(data)
        )
      setIsLoading(false);}



  const addItem = (listingId, auth) => {
    setIsLoading(true)
    console.log('added')
    addToCart(listingId, auth)
    .then(
      ()=>loadListingsCart(auth)
    )
    setIsLoading(false)
    ;}


  const removeItem = (listingId, auth) =>{
    console.log('removed')
    setIsLoading(true);
    removeFromCart(listingId, auth).then(()=>{loadListingsCart(auth);}); }

  useEffect(() => {
      (auth.status === "authenticated") && loadListingsCart(auth);
  }, [auth]);


  return {
    cartListings,
    loadListingsCart,
    addItem,
    removeItem,
    isLoading
  };
};