import React from 'react'

const About = () => {
    return (
        <div className='px-44'>
            <p className='text-4xl font-bold text-center underline mt-4'>About HemoSys</p>
            <br /><p className='text-xl'>HemoSys is an innovative online blood management system designed to
                rationalize the process of blood donation and ensure timely access to life-saving blood transfusions.Our platform aims to connect blood donors with recipients in need, creating a reliable
                and efficient blood management system. With the Blood Bank Operation, donors can easily log in to the system and provide
                their personal information including blood type, contact details, quantity of blood and availability. By implementing an
                online platform, we eliminate the traditional challenges of maintaining physical donor records,
                allowing for more efficient communication and record-keeping. </p>
            <br /><p className='text-xl'>On the other hand, recipients can conveniently access the system and search for donors who match their
                specific criteria. By entering the required blood type, location, and quantity needed, the system will generate a list of potential donors who meet the requirements. The recipients can then verify the donor's information and initiate contact, ensuring that the blood donation process is fast, reliable, and secure. Blood Bank Operation addresses several key challenges faced by blood banks and healthcare facilities. By centralizing donor information and automating the matching process, it significantly reduces the time and effort required to find suitable blood donors. This system also enhances communication between donors and recipients, ensuring that critical blood transfusions can take place without unnecessary delays.
                Furthermore, the online platform provides an opportunity for raising awareness about the importance of blood donation. We aim to create a community of informed donors who are willing to contribute to this life-saving cause.</p>
            <p className='text-left text-5xl'>
                <br />
                <a target="_blank" href="https://github.com/prasssh/" className='hover:drop-shadow-md hover:text-purple'><i class="fa-brands fa-github"></i></a>&nbsp;&nbsp;&nbsp;
                <span>Prashuma Lama</span>
                <br></br>
                <a target="_blank" href="https://github.com/SampadaSubedi/" className='hover:drop-shadow-md hover:text-purple'><i class="fa-brands fa-github"></i></a>&nbsp;&nbsp;&nbsp;
                <span>Sampada Subedi</span>
                <br></br>
                <a target="_blank" href="https://github.com/epsapokhrel/" className='hover:drop-shadow-md hover:text-purple'><i class="fa-brands fa-github"></i></a>&nbsp;&nbsp;&nbsp;
                <span>Epsa Pokhrel</span>

            </p>
        </div>
    )
}

export default About