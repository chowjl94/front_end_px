// import { TrashIcon,ShoppingBagIcon } from "@heroicons/react/solid";
import { Button } from "components/button";
//   import PropTypes from "prop-types";
//   import * as React from "react";
  
  


  
  export const Favouritesmark = (props) => {  
    const { thumbnail,title,competition,video ,onDelete} = props
    

    return (
        
            <li className="flex px-4 sm:px-6 py-4">
                <img src={thumbnail} alt="" className="h-10 w-10 rounded-sm"/>
                  <div className="flex-1 flex justify-between items-center ml-3">
                    <div>
                        <p className="text-sm font-medium text-gray-900">{title}</p>
                        <p className="text-sm text-gray-500">{competition}</p>
                        <a href ={video} target="_blank" rel="noreferrer" className="text-sm text-gray-500"> {video}</a>
                    </div>
                    <Button
            variant='primary'
            onClick={onDelete}
          >
            Remove
          </Button>
                </div>
            </li>
   
        );
    };


