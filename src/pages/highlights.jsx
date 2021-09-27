import React from 'react';
import { HighlightTile,useHighlightsListings } from 'domains/highlights';
import { Button } from 'components/button';
import { useEffect } from 'react';
// import ReactPaginate from "react-paginate"
import { FaveouritesEmpty, Favourites } from 'domains/highlights/components/favourites';
import { useCreateHighLightsMutation } from 'domains/highlights/hooks/use-highlights';





export const HighLightPage = () => {
    const { data:highlights ,
      isLoading,
      page,
      setPage,
      displayLimit,
      bookmark,
      setBookMark} = useHighlightsListings();
    // console.log(highlights)

    const lastIndex = page * displayLimit
    const firstIndex = lastIndex - displayLimit
    console.log(`last:${lastIndex},first:${firstIndex},pageNum:${page},Limit:${displayLimit}`)   

 
     

    if (isLoading && !highlights) {
        return <div className="p-3">Loading ...</div>;
      }
    return(
    <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
          Hightlights
        </h1>
      </div>
      {
        highlights && highlights.length === 0 ? (
        <>No Highlights</>
      ) :
          
          (
      <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between">
          <Button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
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
                  onAdd={()=>{ bookmark.push(highlights.response.slice(index,index+1)[0])
                                setBookMark(bookmark)
                    console.log(highlights.response.slice(index,index+1)[0])
                    console.log(bookmark)}
                    }
                 />
            
          ))}
        </div>
        </div>
      )}

      <div>
 
      {((!bookmark) || (bookmark && bookmark.length === 0))
    ?
    (<FaveouritesEmpty/>)
    :

    
    ( 
      !isLoading && highlights && 
      
    
      bookmark.map((item,index)=>(
      
     
      <Favourites
      key={index} 
      thumbnail={item.thumbnail}
      title={item.title}
      competition={item.competition}
      video = {((item.videos[0].embed.split('src')[1]).split('frameborder')[0]).slice(2,-2)}
      onDelete={()=>{//console.log(`${index}`)
                    delete bookmark[index]
                    // console.log(bookmark)
      }}
    
      />
    )))
    }

      </div>
     </div>
  );
};




// bookmark.map((item,index) => (
  // <Link
  //  href ={((item.videos[0].embed.split('src')[1]).split('frameborder')[0]).slice(2,-2)} 
  //  key = {index}>
  //      <Favourites 
  //             key={index} 
  //     thumbnail={item.thumbnail}
  //     title={item.title}
  //     competition={item.competition}
  //     video = {((item.videos[0].embed.split('src')[1]).split('frameborder')[0]).slice(2,-2)}
  //     onClick={()=>{console.log('deleteaga')}}
  //      />
  // </Link>
  
// ))




// oG
// bookmark.map((item,index)=>(
      
//   <Favourites
//   key={index} 
//   thumbnail={item.thumbnail}
//   title={item.title}
//   competition={item.competition}
//   video = {((item.videos[0].embed.split('src')[1]).split('frameborder')[0]).slice(2,-2)}
//   onClick={()=>{console.log('deleteagassssdfasda')}}

//   />