import {useState} from 'react'
import limeGlass from '../assets/lime-glass.png'
import { Link } from 'react-router-dom';


const Block = (props) => {
    return (
        <>
        <h2 className='font-[Climate_Crisis] text-5xl my-5'>{props.name}</h2>
        <section className="w-1/3 h-auto my-5 rounded-md border-solid border-1 bg-[#FFB9B8] flex items-center justify-center">
            <ul className='columns-2 list-disc gap-20 my-5'>
                {props.content}
            </ul>
        </section>
        </>

    )

}

const Result = () => {

    const [jobTitle, setJobTitle] = useState('Backend Developer')

    const haveSkillList = ['Python', 'Java', 'C++', 'C#', 'Ruby', 'JavaScript']

    const needSkillList = ['React', 'Node.js', 'Express', 'MongoDB', 'SQL', 'Django']

    const haveSkills = haveSkillList.map((skill) => {
        return (
            <li className='text-2xl'>{skill}</li>
        )
    })

    const needSkills = needSkillList.map((skill) => {
        return (
            <li className='text-2xl'>{skill}</li>
        )
    })

    

    return (
        <main className="bg-[#CFFF81] min-h-screen flex flex-col items-center justify-center">
            <img src={limeGlass} alt='Lime Glass' className='w-50 h-auto mt-20'/>
            <h1 className='font-[Climate_Crisis] text-6xl my-10 animate-fadeIn'>Here's The Juice!</h1>
            <h2 className='font-[Climate_Crisis] text-5xl my-5'>Desired Job Title</h2>
            <section className="w-1/3 h-20 my-5 rounded-md border-solid border-1 bg-[#FFB9B8] flex items-center justify-center">
                <h3 className='text-6xl inline-block align-middle'>{jobTitle}</h3>
            </section>


            <Block name='Your Skills' content={haveSkills} />
            <Block name='Skills Required' content={needSkills} />

            <Link to="" className='mb-10'>To your Dashboard</Link>

        </main>
    )
}


export default Result