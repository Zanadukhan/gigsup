import { Link } from "react-router-dom";

const WavyBackground = () => {
    return (
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#FFB9B8]" /> 
  
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1440 50C1200 200 960 250 720 200C480 150 240 50 0 200V0H1440V50Z" fill="#CFFF81" />
          <path d="M1440 550C1200 700 960 750 720 700C480 650 240 550 0 700V800H1440V550Z" fill="#8CDBE0" />
        </svg>
      </div>
    );
  };
  
  const SignUp = () => {
    return (
      <div className="relative min-h-screen flex items-center justify-center">
        <WavyBackground />
  
        <div className="bg-white p-10 rounded-lg shadow-lg w-[600px]">
          <h2 className="text-3xl font-bold text-center">Create your Account</h2>
          <p className="text-gray-500 text-center mb-6">Fill out your credentials below</p>
  
          <form className="space-y-4 w-[400px] mx-auto" method="post">

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full border-2 border-black rounded-lg px-4 py-3 mt-1 focus:outline-none focus:ring focus:border-blue-300 "
              />
            </div>
  
            <div >
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="*******"
                className="w-full border-2 border-black rounded-lg px-4 py-3 mt-1 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium">Confirm Your Password</label>
              <input
                type="password"
                placeholder="*******"
                className="w-full border-2 border-black rounded-lg px-4 py-3 mt-1 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
  
  
            <button className="w-full bg-[#8CDBE0] text-black py-2 rounded-lg border-2 border-black">
              Sign Up
            </button>
  
            <div className="text-center text-black">- Or Sign Up with -</div>
  
            <button className="w-full bg-[#FFB9B8] text-black py-2 rounded-lg border-2 border-black">
              Gmail
            </button>
  
            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <Link className="text-green-700 cursor-pointer underline" to='/login'>Sign In!</Link>
            </p>
          </form>
        </div>
      </div>
    );
  };
  
  export default SignUp;
  