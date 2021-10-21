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




  return {
    ...query,
    page,setPage,
    count,setCount,
    displayLimit,setDisplayLimit,
    bookmark,setBookMark,
  };
};


