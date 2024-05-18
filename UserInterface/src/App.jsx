import { Navbar , Sidebar , Home } from "./components" 
import { Outlet } from 'react-router-dom';
import { useState , useEffect} from "react";

function App() {
  const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
      const handleResize = () => {
          if (window.innerWidth < 768) {
              setIsOpen(false);
          } else {
              setIsOpen(true);
          }
      };

      window.addEventListener('resize', handleResize);
      
      // Initial check
      handleResize();

      // Cleanup event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
  }, []);
   
  return (
    <>
       <Navbar 
           openChange={() => setIsOpen(prev => !prev)}
        />
       <div className={`flex pt-8  overflow-hidden bg-gray-50 `}>
              {/* {{ sidebar }} */}
              <Sidebar
                hidden={isOpen}
              />
                <div id="main-content" className={`relative w-full h-full overflow-y-auto bg-gray-50 ${isOpen ? "lg:ml-52" : "ml-0"} `}>
                    <main>
                    {/* {{ Content }} */}
                       <Outlet/>
                    </main>
                    {/* {{ Footer }} */}
                </div>
          </div>
    </>
  )
}

export default App