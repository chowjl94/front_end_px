
export const MovieTile = ({ data }) => {
  const { backdropUrl, title, overview } = data;
  
    return (
    <div className="relative flex flex-col">
      <div className="group block w-full rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-pink-500 overflow-hidden">
        <img
          src={backdropUrl}
          alt={title}
          className="object-cover pointer-events-none group-hover:opacity-75 h-48 w-full"
        />
      </div>
      <div className="flex-1 flex md:flex-col justify-between items-start md:items-stretch gap-3 px-2">
        <div className="mt-1 flex-1">
          <div className="flex justify-between items-center gap-3">
            <div>
              <span className="text-2xl font-bold">{title}</span>
            </div>

          </div>
          <p className="block text-sm font-medium text-gray-500 pointer-events-none">
            {overview}
          </p>
        </div>
      </div>
    </div>
  );
};