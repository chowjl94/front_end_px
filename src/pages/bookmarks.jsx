import React from 'react';
// import { FaveouritesEmpty, Favouritesmark} from "domains/highlights/components/favourites";
import { FaveouritesEmpty } from 'domains/highlights/components/favouritesempty';
import { Favouritesmark } from 'domains/highlights/components/favouritesmark';




export const Bookmarks=() =>{

    const [counter ,setCounter] = React.useState(1);
    const localData = localStorage.getItem("bookmark");
    const newBookMarks= [...JSON.parse(localData)];
    
    
 

    const handleDelete =(index)=>{

        const new1= newBookMarks.slice(0,index)

        const new2= newBookMarks.slice(index+1)

        const updatedbookmarklist = new1.concat(new2)

        localStorage.setItem('bookmark',JSON.stringify(updatedbookmarklist))
        setCounter(counter+1)
     }




    return (
        <div>
           {
            ((!newBookMarks) || (newBookMarks && newBookMarks.length === 0))
            ?
            (<FaveouritesEmpty/>)
            :
            (newBookMarks.map((item,index)=>(    
     
                <Favouritesmark
                key={index} 
                thumbnail={item.thumbnail}
                title={item.title}
                competition={item.competition}
                video = {((item.videos[0].embed.split('src')[1]).split('frameborder')[0]).slice(2,-2)}
                onDelete={()=>handleDelete(index)}
              
                />
              )))
            }  

    </div> 
    )
}

