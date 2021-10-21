import * as React from "react";
import { useQuery } from "react-query";
import { getHighlights } from "../highlights.service";
// import { useAuth } from 'domains/auth';

export const useHighlightsListings = () => {
  const [page, setPage] = React.useState(1);
  const [count,setCount] =React.useState(0)
  // const [post, setPost] = React.useState([])
  const [displayLimit,setDisplayLimit] =React.useState(6)
  const [bookmark, setBookMark]= React.useState([])
  // const [isLoading, setIsLoading] = React.useState(false)



  const query = useQuery(["highlights"], () => getHighlights(), {
    staleTime: 100000000
  });
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





  return {
    ...query,
    page,setPage,
    count,setCount,
    displayLimit,setDisplayLimit,
    bookmark,setBookMark,
    handleDelete
  };
};


