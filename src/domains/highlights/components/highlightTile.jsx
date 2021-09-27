
import { Button } from "components/button";



export const HighlightTile = ({ data , onAdd}) => {
  const { title, competition, videos,date} = data;
  
  
    return (
    <div className="relative flex flex-col">
      <div className="group block w-full rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-pink-500 overflow-hidden">
      <div>
      {<div className='width:100%;height:0px;position:relative;padding-bottom:56.250%;'>
      
        <iframe title="myFrame" src={(videos.map((src)=>
         (((src.embed).split('src')[1]).split('frameborder')[0]).slice(2,-2)))}
      
         frameBorder='0' width='100%' height='100%' allowFullScreen allow='autoplay; fullscreen' 
         className='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'>

         </iframe>
         </div>
      }

       </div>
        
      </div>
      <div className="flex-1 flex md:flex-col justify-between items-start md:items-stretch gap-3 px-2">
        <div className="mt-1 flex-1">
          <div className="flex justify-between items-center gap-3">
            <div>
              <span className="text-2xl font-bold">{title}</span>
            </div>

          </div>
          <p className="block text-sm font-medium text-gray-500 pointer-events-none">
            {competition}
          </p>
          <p className="block text-sm font-medium text-gray-500 pointer-events-none">
          {date}
          </p>
          <span>
          <Button
            variant='primary'
            onClick={onAdd}
          >
            Add to playlist
          </Button>
        </span>
        </div>
      </div>
    </div>
  );
};