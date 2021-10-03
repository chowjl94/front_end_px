import { TrashIcon,ShoppingBagIcon } from "@heroicons/react/solid";
  import { Button } from "components/button";
  import PropTypes from "prop-types";
  import * as React from "react";
  
  
  const DeleteButton = (props) => (
    <Button variant="outline" onClick={props.onClick}>
      <TrashIcon className="w-4 h-4 mr-1.5" />
    </Button>
  );

  
  export const CartItems = (props) => {  
    const { item, onClick } = props

    const { quantity, listing } = item;
    const { imageUrl, title, price } = listing;
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
    };


export const CartEmpty = () => {
    return (
        <div className="px-4 sm:px-6 pb-12">
            <div className="pt-6 pb-5">
                <div id="no-cart-item-message">
                    <div className="p-4 text-center">
                        <ShoppingBagIcon className="inline-block w-12 h-12 text-gray-300" />
                        <p className="text-center text-gray-500">Cart is Empty Add Items!</p>
                    </div>
                </div>
            </div>
        </div>
    )

}



CartItems.propTypes = {
    
    item: PropTypes.shape({
            quantity: PropTypes.number.isRequired,
            listing: PropTypes.shape({
                        title: PropTypes.string.isRequired,
                        price: PropTypes.number.isRequired,
                        imageUrl: PropTypes.string.isRequired
            }).isRequired
    }).isRequired,
    onClick: PropTypes.func.isRequired
  }

DeleteButton.propTypes={
    onClick:PropTypes.func.isRequired
}