import React from 'react';
import { MovieTile,useMovieLisitngs} from 'domains/movies'
import { Link } from 'react-router-dom';
import { Button } from 'components/button';
// import {useAuth,LoginForm} from 'domains/auth'

export const MoviesPage = () => {
    const { data, isLoading,page,setPage } = useMovieLisitngs();
    // const auth = useAuth()

    if (isLoading && !data) {
        return <div className="p-3">Loading ...</div>;
      }
    return(

    <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
          Movies today
        </h1>
      </div>
      {
        data.length === 0 ? (
        <>There is no movies</>
      ) :
          
          (
      <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between">
          <Button
            variant="primary"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </Button>
          <Button variant='primary' type="button" onClick={() => setPage(page + 1)}>
            Next
          </Button>
        </div>
        <br/>
        <div className="grid md:grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-3 xl:gap-x-6">
          {data.map((item) => (
            <Link
             to ={`/movie/${item._id}`} 
             key = {item._id}>
                 <MovieTile 
                  data= {item}
                 />
            </Link>
            
          ))}
        </div>
        </div>
      )}
     </div>
    

  );
};




