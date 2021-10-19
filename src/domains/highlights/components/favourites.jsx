
  import { Button } from "components/button";
//   import PropTypes from "prop-types";
//   import * as React from "react";
  
  


  
  export const Favourites = (props) => {  
    const { thumbnail,competition,video ,onDelete} = props
    

    return (
        
            <div className="flex-col">
                <li className= 'flex flex-col items-center space-y-2'>
                <div className= 'bg-gradient-to-tr from-yellow-400 to-purple-600 p-1 rounded-full'>
                <a href ={video} target="_blank" rel="noreferrer" className="text-sm text-gray-500">
                   <img src={thumbnail} alt="" className="h-20 w-20 rounded-full transform hover:scale-110 motion-reduce:transform-none" title={competition}/>
                </a>
                </div>
                  <div className="flex-1 flex justify-between items-center ml-3">
                    {/* <div>
                        <p className="text-sm font-medium text-gray-900">{title}</p>
                        <p className="text-sm text-gray-500">{competition}</p>
                        <a href ={video} target="_blank" rel="noreferrer" className="text-sm text-gray-500"> {video}</a>
                    </div> */}
                    
                    <Button align='center' variant='primary' onClick={onDelete}>-</Button>
                </div>
                </li>
            </div>
   
        );
    };


