import React from 'react'
import g1 from "../../assest/donation/g1.jpg"
import g2 from "../../assest/donation/g2.jpg"
import g3 from "../../assest/donation/g3.jpg"
import g4 from "../../assest/donation/g4.jpg"

const AboutDonation = () => {
    const data = [
        { title: "Registration", img: g1 },
        { title: "Examine", img: g2 },
        { title: "Donation", img: g3 },
        { title: "Save Life", img: g4 },
    ]
    return (
        <section className="grid place-items-center dark:text-white-900">
            <div className="container">
                <div className="text-center"><br />
                    <h2 className='text-3xl font-bold'>Donation Process</h2>
                    <code>The donation process from the time you arrive center until the time you leave</code><br /><br />
                </div>
                <div className='grid grid-cols-2 place-items-center'>
                    {data.map((e, i) =>
                        <div className='border-metal shadow-md bg-white-900 rounded-lg overflow-hidden max-w-[90%] select-none'>
                            <img src={e.img} draggable={false} width="100%" alt="" />
                            <div className='m-10'>
                                <h1 className='font-bold text-lg text-midnight'>{i + 1} - {e.title}</h1>
                                <p className='text-justify'>Lorem </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default AboutDonation