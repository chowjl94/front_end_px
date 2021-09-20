import { Button } from 'components/button'
import { TextField } from 'components/text-field';
import { TrashIcon } from '@heroicons/react/solid';
import { StarRating } from 'components/rating-stars';
import { IconButton } from "components/icon-button";

const DeleteButton = (props) => {
    return (
      <IconButton title="Delete" onClick={props.onClick}>
        <TrashIcon className="w-5 h-5 text-gray-400" />
      </IconButton>
    );
  };



export const RatingComments = ({user,formik,data,isLoading, authStatus,onDelete})=>{
    if (isLoading){
        return (
            <div className="py-5">
                <h2 className="text-xl">Movice Comments</h2> 
                 <p> Loading comments ...</p>
            </div>
        )
    }

     return(
        <div className="py-5">
        <h2 className="text-xl">Movie Comments</h2>
        {!data || (data && data.length === 0) ? (
            <p>No comments</p>
        ): (

           data.map((comment,index) => (
          <div
          key={index}
          className="flex justify-between items-center px-4 sm:px-6 py-3 bg-white">
          <p>{comment.content}</p>
          <p>rated:{comment.rating}</p>
          {onDelete && <DeleteButton onClick={onDelete} />}
          </div>
          
          
          
        ))
      )}
        {authStatus==='authenticated' && !isLoading && (
            <form onSubmit={formik.handleSubmit} className="mt-5">
            <StarRating
            value={formik.values.rating}
            name="rating"
            onChange={formik.handleChange}
            className='w-full'
             />

                <TextField
                label="Comments"
                type="text"
                className="w-full"
                value={formik.values.content}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="comments"
                id="comments"
                />
        {formik.touched.comments && formik.errors.comments && (
            <div className="block text-xs text-red-500">{formik.errors.comments}</div>
          )}
                <Button type="submit" variant="primary" className="mt-3">
                    Post
                </Button>
            </form>
        )}
        </div>
     )   
    }
