import Navbar from "./Navbar";

const About = () => {
    return (
        <div>
            <Navbar/>
            <div className="bg-black flex items-center justify-center p-24">
            <div className="bg-gradient-to-tl from-purple-900 to-green-700 h-full w-3/4 bg-cover bg-center relative ">
                <img src="https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-full h-full object-cover absolute mix-blend-overlay"alt=""></img>
                <div className="p-28 text-white">
                    <h1 className=" text-6xl font-bold ">About us</h1>
                    <br></br>

                    <p >For all our national institutes of eminence, it is a well-known fact that the Alumni have always played a key role in building the institute and its reputation. Likewise, we at IIT Hyderabad have identified the Alumni Relations office as one of the key pillars of our institute and the office of Dean Alumni Relations has recently been established.</p>
                    <br></br>
                    <p>Since assuming the office, we have initiated several outreach activities to welcome you back to your alma mater and to professionalize the engagement with our Alumni. In the upcoming period, we intend to carry out more outreach activities such as reunions, campaigns, alumni day, and alumni talks. Even without any special event or invitation, as you have been a part of the IIT Hyderabad family, we would just love to have you visit us on the campus, have a brief 'chit-chat', witness our campus development, and have a simple 'chai pe charcha'. The growth of our campus on all fronts not just relies on the people currently here but we would also love to hear and learn from your experiences to make IIT Hyderabad the best in our nation.</p>
                    <br></br>
                    <p>our support in any form would help us build the institute and achieve the status of being 'the best' from 'one of the best'. We are always available to hear from you and to welcome you back to IIT Hyderabad.</p>
                </div>
            </div>
        </div>
        </div>
           );
}
 
export default About;