
import { useFormik } from 'formik';


import { useAuth } from 'domains/auth';


import { useCreateCommentMutation, useDeleteCommentMutation, useMovieSingle,useMovieSingleComments } from "../hooks/use-movies";
import { RatingComments } from './ratings-comments';

export const MovieItemIndiv = ({ movieId }) => {
  const { data: singleMovie, isLoading: isLoadingDetail } = useMovieSingle(movieId);
  const { data: commentsSingle, isLoading: isLoadingComments } = useMovieSingleComments(movieId);
  const { status, accessToken } = useAuth();
  const commentPost= useCreateCommentMutation()
  const commentDelete = useDeleteCommentMutation()

  const formik = useFormik({
    initialValues:{ 
      ratings: null, 
      comments:'' },
    onSubmit:(values)=>{
      console.log({values})
      commentPost.mutate({values, movieId})
    }
  })




  if (!singleMovie && isLoadingDetail) {
    return <div className="p-3">Loading ...</div>;
  }

  if (!singleMovie) {
    return <div className="p-3">Issue with retrieving data</div>;
  }
  

  const { posterUrl, releaseDate, title, overview, adult } = singleMovie

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex movie__detail">
        <div>
          <img src={posterUrl} alt={title} />
        </div>
        <div className="mt-10 lg:mt-0 pl-4 lg:container">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <div className="flex">
            {releaseDate}{' '}
            {adult && (
              <div className="bg-purple-600 bg-opacity-75 text-white px-5 ml-2 rounded-full">
                18+
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="py-3">
        <h2 className="text-xl">Overview</h2>
        {overview}
      </div>
      

      <RatingComments
        data={commentsSingle}
        isLoading={isLoadingComments}
        formik={formik}
        user={accessToken}
        authStatus={status}
        onDelete={(id) => commentDelete.mutate(id)}
                

      />

    </div>
  );
};