import { Link } from "react-router-dom";



const WavyBackground = () => {
    return (
        <div className="min-h-screen w-full relative overflow-hidden">
    <div className="absolute inset-0 bg-[#FFB9B8]" />

    <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M1440 300C1200 450 960 500 720 450C480 400 240 300 0 450V0H1440V300Z" fill="#CFFF81" />
  
        <path d="M1440 550C1200 700 960 750 720 700C480 650 240 550 0 700V800H1440V550Z" fill="#8CDBE0" />
    </svg>

    <div className="relative z-10 text-center px-6 text-4xl mt-[200px]">
        Discover <span className="font-bold">career pathways</span> tailored just for you—explore roles, skills, stress levels, and more!
    </div>
</div>

    )
  }

const SignIn = () => {
    return (
        <>
            <div className="flex h-screen items-center justify-center bg-gray-100">
                <div className="w-11/20 flex flex-col justify-center rounded-l-lg">
                    <WavyBackground />
                </div>

                <div className="w-9/20 h-2/2 bg-white p-10 rounded-r-lg shadow-lg">
                    <div classname="content-center">
                        <h2 className="text-4xl flex justify-center items-center lg:mr-[100px]">Welcome Back!</h2>
                        <p className="text-gray-500 mb-6 flex justify-center items-center lg:mr-[125px]">Enter your credentials below</p>

                        <form className="space-y-4" method="post">
                        <div class="flex flex-col items-center">
                            <label className="block text-sm font-medium lg:mr-[275px]">Email</label>
                            <input
                            type="email"
                            placeholder="email@example.com"
                            className="w-full border-2 border-black rounded-lg px-4 py-3 mt-1 focus:outline-none focus:ring focus:border-blue-300 sm:w-80"
                            />
                        </div>

                        <div className="flex flex-col items-center">
                        <label className="block text-sm font-medium text-left lg:mr-[255px]">Password</label>
                        <input
                            type="password"
                            placeholder="*******"
                            className="w-full border-2 border-black rounded-lg px-4 py-3 mt-1 focus:outline-none focus:ring focus:border-blue-300 sm:w-80"
                        />
                        </div>


                        <div className="text-gray-500 cursor-pointer flex flex-col items-center lg:ml-[200px]">
                            <a href="#" classname="">Forgot Password?</a>
                        </div>
                        <div class="flex flex-col items-center">
                            <a href="#">
                                    <button className="w-full bg-[#8CDBE0] text-black py-2 rounded-lg sm:w-80 border-2 border-black">
                                        Sign In
                                    </button>
                                </a>
                        </div>

                        <div className="text-center text-black">- Or login with -</div>

                        <div class="flex flex-col items-center">
                            <a href="#">
                                <button className="w-full bg-[#FFB9B8] text-black py-2 rounded-lg sm:w-80 border-2 border-black">
                                    Gmail
                                </button>
                            </a>
                        </div>

                        <p className="text-center text-sm mt-4">
                            Don't have an account?{" "}
                            <Link className="text-green-700 cursor-pointer underline" to="/register">Sign Up!</Link>
                        </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn;