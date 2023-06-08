import IITH from './IITH.mp4'
import Navbar from './Navbar'
const Home = () => {

    return (
       <div>
        <Navbar/>
         <div className='grid grid-cols-1 gap-4'>
            <div>
                <video autoPlay loop muted
                    className='w-full h-full top-0 object-cover -z-40 absolute overflow-clip'>
                    <source src={IITH} type="video/mp4" />
                </video>
                <div className='text z-40 text-center top-40 relative '>
                    <div className="inline-block text-3xl  text-white tracking-tight">Office of Alumni Relations</div>
                    <br></br>
                    <div className="inline-block text-7xl  uppercase font-sans text-white tracking-tight dark:text-slate-200">Welcome</div>
                    <br></br>
                    <div className="inline-block text-7xl  uppercase font-sans text-white tracking-tight dark:text-slate-200">Back</div>
                </div>
            </div>
        </div>
       </div>
    );
}

export default Home;