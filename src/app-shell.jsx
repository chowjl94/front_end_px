
import { Link } from 'react-router-dom';

export const AppShell = ({ children }) => {

  return (
    <>
      <header className="md:sticky md:top-0 bg-white md:z-10">
        <div className="px-4">
          <div className="flex justify-between items-center py-2 max-w-7xl mx-auto border-b border-gray-200">
            <nav className="flex items-center">
              <Link
                to="/"
                className="text-xl inline-block mr-4 font-bold text-pink-700 hover:text-pink-900"
              >
                Highlights
              </Link>


            </nav>
            
          </div>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};
