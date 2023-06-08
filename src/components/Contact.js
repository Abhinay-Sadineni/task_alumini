import Navbar from "./Navbar";
const Contact = () => {
    return (
       <div>
        <Navbar/>
         <div className='relative flex flex-col justify-center min-h-screen bg-msme bg-no-repeat bg-cover overflow-hidden'>
            <div className="container mx-auto">
                <div className="flex w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                    <iframe className="w-1/2 holds-the-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.2008569170043!2d78.12140051487924!3d17.59319448795564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf764a43c2dbd%3A0xa3a6a4d315b991e2!2sDepartment%20of%20Material%20Science%20and%20Metallurgical%20Engineering%20(MSME)%2C%20IIT%20Hyderabad!5e0!3m2!1sen!2sin!4v1686151546666!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Address"></iframe>
                    <div className="text-black mx-auto border border-rounded m-4 p-4 bg-gradient-to-t from-bg-red-700 to-bg-blue-700">
                        <div className="text-3xl font-bold">Contact Details</div>
                        <br/>
                        <br/>
                        <p>Alumni Relations Office:</p>
                        <br/>
                        <p>
                            Acad Building-MSME, First Floor, 105
                            </p>
                            <br/>

                            <p>
                            IIT Hyderabad, Kandi
                            </p>
                            <br/>

                            <p>
                            Hyderabad-502284, India
                            </p>
                            <br/>

                            <p>
                            Email: office.ar@iith.ac.in</p>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
}

export default Contact;