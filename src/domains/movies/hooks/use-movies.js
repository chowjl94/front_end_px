import * as React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
// import { getListingDetails, getListings } from "../movie.service";
import { getMovies,getSingle,getSingleComment,postComment,deleteComment } from "../movie.service";
import { useAuth } from 'domains/auth';

export const useMovieLisitngs = () => {
  const [page, setPage] = React.useState(1);
  const [limit,setLimit] =React.useState(10)

  const query = useQuery(["movies", page,limit], () => getMovies(page,limit), {
    staleTime: 100000000
  });

  return {
    ...query,
    page,
    setPage,
    limit,
    setLimit
  };
};



export const useMovieSingle = (id) => {
    const query = useQuery(['singleMovie', id], () => getSingle({ id }));
  
    return { ...query };
  };

export const useMovieSingleComments = (id) => {
    const query = useQuery(['commentsSingle', id], () => getSingleComment({ id }));
    return { ...query };
  };

export const useCreateCommentMutation =()=>{
  const queryClient = useQueryClient()
  const {accessToken} = useAuth()
  return useMutation((data)=>postComment({data,token:accessToken},{
    onSuccess: ()=> queryClient.invalidateQueries('createComments')
  }))
}

export const useDeleteCommentMutation =()=>{
  const queryClient = useQueryClient()
  const {accessToken} = useAuth()
  return useMutation((id)=>deleteComment({id,token:accessToken},{
    onSuccess: ()=> queryClient.invalidateQueries('deleteComments')
  }))
}


