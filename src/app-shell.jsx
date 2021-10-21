
import { Link } from 'react-router-dom';

export const AppShell = ({ children }) => {

  return (
    <>
      <header className="md:sticky md:top-0 bg-white-700 md:z-10">
        <div className="px-4">
          <div className="flex justify-between items-center py-2 max-w-7xl mx-auto border-b border-gray-200">
            <nav className="flex items-center">
            <img src="https://logowik.com/content/uploads/images/760_ball_vector_file.jpg" alt="" className="h-10 w-10 rounded-sm"/>
              <Link
                to="/"
                className="text-xl inline-block mr-4 font-bold text-black-700 hover:text-pink-900"
              >
                Highlights
              </Link>

              <Link
              to = "/bookmarks"
              className="text-xl inline-block mr-4 font-bold text-black-700 hover:text-pink-900"
              >
              Bookmarks
              </Link>
              


            </nav>
            
          </div>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};
