
import { HighlightTile } from 'domains/highlights';
import { Button } from 'components/button';
// import ReactPaginate from "react-paginate"
import { useHighlightsListings } from 'domains/highlights';
import { FaveouritesEmpty } from 'domains/highlights/components/favouritesempty';
import { Favourites } from 'domains/highlights/components/favourites';
import React from 'react';

export const HighLightPage = () => {
    const { data:highlights , isLoading,page,setPage,displayLimit,bookmark, setBookMark} = useHighlightsListings();
    console.log(highlights)

    const lastIndex = page * displayLimit
    const firstIndex = lastIndex - displayLimit
    console.log(`last:${lastIndex},first:${firstIndex},pageNum:${page},Limit:${displayLimit}`) 

    const handleAdd =(index)=>{
      const id1= index + ((page-1)*displayLimit)
      // bookmark.push(highlights.response.slice(index,index+1)[0])

      bookmark.push(highlights.response.slice(id1,id1+1)[0])
      
      const newUpdatedbookmarklist= [...bookmark]
      setBookMark(newUpdatedbookmarklist)     
      console.log(highlights.response.slice(id1,id1+1))

    }  

    const handleDelete =(index)=>{
      localStorage.setItem('bookmark',JSON.stringify(bookmark))
      const new1= [...bookmark.slice(0,index)]
      const new2= [...bookmark.slice(index+1)]
      const updatedbookmarklist = new1.concat(new2)
      setBookMark(updatedbookmarklist)
     
   }
   
  
    React.useEffect(()=>{
      const data = localStorage.getItem('bookmark')
      if (data){
        setBookMark(JSON.parse(data))
      }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    React.useEffect(()=>{
      localStorage.setItem('bookmark',JSON.stringify(bookmark))
    })


 
    if (isLoading && !highlights) {
        return <div className="p-3">Loading ...</div>;
      }
    return(
      
    <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
          Soccer Hightlights
        </h1>
      </div>
      <div className= 'flex space-x-6'>
 
        {((!bookmark) || (bookmark && bookmark.length === 0))
        ?
        (<FaveouritesEmpty/>)
        :

        ( 

          
          bookmark.map((item,index)=>(    
          
          <Favourites
          key={index} 
          thumbnail={item.thumbnail}
          title={item.title}
          competition={item.competition}
          video = {((item.videos[0].embed.split('src')[1]).split('frameborder')[0]).slice(2,-2)}
          onDelete={()=>handleDelete(index)}        
          />
        )))}
   </div>
      {
        highlights && highlights.length === 0 ? (
        <>No Highlights</>
      ) :
          
          (
      <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between">
          <Button
            disabled={(page === 1)}
            onClick={() => setPage(page - 1) }>
            Prev
          </Button>
          <Button type="button"
          disabled={page === 38}
          onClick={() => setPage(page + 1)}>
            Next
          </Button>
        </div>
        <br/>
        <br/>
        <div className="grid md:grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-3 xl:gap-x-6">
          
          {highlights && highlights.response.slice(firstIndex,lastIndex).map((item,index) => (

                 <HighlightTile
                  data= {item}
                  key={index}
                  onAdd={()=>handleAdd(index)}
                 />
            
          ))}
        </div>
        </div>
      )}
     </div>
  );
};




