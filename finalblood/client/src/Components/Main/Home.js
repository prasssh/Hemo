
import React from 'react'
import bg1 from "../../assest/bg1.png";
import bg2 from "../../assest/bg2.png";
import blooddonate from "../../assest/blooddonate.png"
import g1 from "../../assest/donation/g1.jpg"
import g2 from "../../assest/donation/g2.jpg"
import g3 from "../../assest/donation/g3.jpg"
import g4 from "../../assest/donation/g4.jpg"
const Home = () => {
    const temp = [
        { blood: "A+", donate: "A+ AB+", recieve: "A+ A- O+ O-" },
        { blood: "O+", donate: "O+ A+ B+ AB+", recieve: "O+ O-" },
        { blood: "B+", donate: "B+ AB+", recieve: "B+ B- O+ O-" },
        { blood: "AB+", donate: "AB+", recieve: "Everyone" },
        { blood: "A-", donate: "A+ A- AB+ AB-", recieve: "A- O-" },
        { blood: "O-", donate: "Everyone", recieve: "O-" },
        { blood: "B-", donate: "B+ B- AB+ AB-", recieve: "B- O-" },
        { blood: "AB-", donate: "AB+ AB-", recieve: "AB- A- B- O-" }
    ]
    const temp2 = [
        { title: "Registration", img: g1 },
        { title: "Seeing", img: g2 },
        { title: "Donation", img: g3 },
        { title: "Save Life", img: g4 },
    ]
    return (
        <div className="dark:text-white-900">
            <div className='grid grid-cols-2 place-items-center mt-20 px-5'>
             
                <div>
                    
                    
                <img draggable={false} src={bg1} width="100%" alt="" />
                   
                </div>
                   <div>
                    <img draggable={false} src={bg2} width="100%" alt="" />
                </div>
            </div>
            <h1 className='font-bold text-center text-blood my-20 text-lg '>More About Donation</h1>
            <div className='flex px-10'>
                <div>
                    <img src={blooddonate} width="40%" alt="" />
                    <p className='text-left'>
                        <br>
                        
                        </br>
                        <code> After donating blood, the body works to replenish the blood loss.
                            <br></br> This stimulates the production of new blood cells and in turn,
                            <br></br> helps in maintaining good health.</code>
                    </p>
                </div>
                <div>
                    <table className='w-max' cellPadding={20}>
                        <tr>
                            <td colSpan={3} className="border bg-blood text-white-900 text-center font-bold">Compatible Blood Type Donors</td>
                        </tr>
                        <tr>
                            <th className='border w-max text-lg'>Blood Type</th>
                            <th className='border w-max text-lg'>Donate Blood To</th>
                            <th className='border w-max text-lg'>Receive Blood From</th>
                        </tr>
                        {temp.map((e) => {
                            return (
                                <tr>
                                    <td className='border w-max text-lg'>{e.blood}</td>
                                    <td className='border w-max text-lg'>{e.donate}</td>
                                    <td className='border w-max text-lg'>{e.recieve}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
            <p className='text-xl font-bold text-blood text-center mt-5 mb-5'>
                Blood Donation Process
            </p>
            <div className='grid grid-cols-2 place-items-center'>
                {temp2.map((e, i) =>
                    <div className='border-metal bg-white-900 shadow-md rounded-lg overflow-hidden max-w-[90%] select-none grid grid-cols-2'>
                        <div><img src={e.img} draggable={false} width="100%" alt="" /></div>
                        <div className='m-4'>
                            <h1 className='font-bold text-lg text-midnight dark:text-white-900'>{i + 1} - {e.title}</h1>
                            <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur qwey adipisicing elit. 
                        Doloribus, as aliquam corporis dolorem consectetur qui libero, veritatis, nihil alias
                         repellat quam architecto nobis laudantium ipsum nemo nesciunt quisquam est odit ad?</p>
                        </div>
                    </div>
                )}
            </div>
            <br />
            <div className='w-full bg-blood text-white-900 h-15 text-sm text-center font-bold'>
                <code>Donate for Change! </code>
            </div>
        </div>
    )
}


export default Home
