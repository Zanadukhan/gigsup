import handSqueezeLime from '../assets/hand-squeeze-lime.png'
import handshake from '../assets/hand-shake.jpeg'
import caps from '../assets/caps.jpeg'
import people from '../assets/people.jpeg'
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <div className='mt-10'>
            <div className="mx-5 max-w-sm bg-[#CFFF81] border-[#FFB9B8] border-solid border-8 rounded-lg shadow-sm">
                <a href="#">
                    <img  src={props.img} alt={props.alt} />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{props.header}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 bg-[#CFFF81]">{props.text}</p>
                </div>
            </div>

        </div>
    )
}

const Content = () => {
  return (
    <main className="mb-auto">
        <section className="h-2/5 bg-[#FFB9B8] flex justify-between">
        <div className='w-2/4'>
         <h1 className="mb-10 text-6xl font-[Climate_Crisis] pt-8 pl-10">Ready to get the juicy goods on your next career path?</h1>
         <p className=" pl-10 w-3/4 text-xl font-normal">Discover your next career move with Gigsup, the AI-powered platform that matches your strengths, interests, and skills with career paths that truly fit you. We provide clear career insights—like roles, skills, compensation, stress levels, and flexibility—so you can save time, avoid unnecessary education costs, and find a job that suits you.</p>
         <Link to='/register' className="text-center mt-6 shadow-xl w-48 px-12 outline block ml-11 mt-6 [#8CDBE0] hover:bg-red-300 py-2 px-4 rounded-full mb-5">Register Now</Link>
         </div>
         <div className="w-1/3 flex justify-end">
                <img className="object-none h-full w-100" src={handSqueezeLime} alt="Hand squeezing lime"/>
         </div>
        </section>
        <section className='h-3/5 bg-[#CFFF81] flex flex-col items-center'>
        <h1 className='font-[Climate_Crisis] text-6xl mt-10'>How the juice is made</h1>
        <div className='flex justify-between w-3/4 mb-20'>

        <Card
        header='Designed for you'
        text='Create a personalized profile by assessing your strengths, skills, and  interests. Our platform helps you understand how your unique abilities  align with real-world job opportunities.'
        img={people}
        alt='group of business people smiling at camera'
        />

        <Card 
        header='llama powered' 
        text='Using AI-powered insights, we match your profile with careers that best  fit your strengths, skills, interests and goals. Explore tailored career options that reflect your skills and passions.'
        img={handshake}
        alt='hands shaking'
        />

        <Card
        header='Find your path'
        text='With personalized insights in hand, confidently move forward in your  career journey. Whether it’s landing your next job, upskilling,  reskilling or seeking education, we’ll guide you on every step.'
        img={caps}
        alt='throwing graduation caps'
        />

        </div>
            
        </section>

    </main> 
 );
}

export default Content;