import * as React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getHighlights,getHighLightDetails, addHighLights } from "../highlights.service";
// import { useAuth } from 'domains/auth';

export const useHighlightsListings = () => {
  const [page, setPage] = React.useState(1);
  const [post, setPost] = React.useState([])
  const [displayLimit,setDisplayLimit] =React.useState(6)
  const [bookmark, setBookMark]= React.useState([])

  const query = useQuery(["highlights"], () => getHighlights(), {
    staleTime: 100000000
  });



  return {
    ...query,
    page,setPage,
    post,setPost,
    displayLimit,setDisplayLimit,
    bookmark,setBookMark
  };
};


