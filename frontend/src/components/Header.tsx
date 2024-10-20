const Header = () => {
  function clickAbout() {
    window.location.href = "/about";
  }
  function clickHome() {
    window.location.href = "/";
  }
  function clickHow() {
    window.location.href ="/howitworks"
  }
  function clickYield() {
    window.location.href = "/form"
  }

  return (
    <header>
      <div className="container mx-auto flex justify-between items-center py-8 pt-8 pb-4">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <a href="/">
            <img
              onClick={clickHome}
              src=".\src\assets\Cropful_logo.png"
              alt="Logo"
              className="h-14 w-auto"
            />
            <span className="text-2xl font-bold text-white"></span>{" "}
            {/* Company Name */}
          </a>
        </div>
        {/* Buttons Section */}
        <div className="space-x-4">
          <button 
            onClick={clickHow}
            className="text-green-700 font-bold py-2 px-4 rounded"
            >
            How it Works
          </button>
          <button
            onClick={clickAbout}
            className="text-green-700 font-bold py-2 px-4"
          >
            About Us
          </button>
          <button 
            onClick={clickYield}
            className="text-green-700 font-bold py-2 px-4 rounded"
            >
            Get Yield
          </button>
          
        </div>
      </div>
      
    </header>
  );
};

export default Header;
