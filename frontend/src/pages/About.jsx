import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div>
            
            <div className='text-center text-2xl pt-10 text-gray-500'>
                <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
            </div>

            <div className='my-10 flex flex-col md:flex-row gap-12'>
                <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
                    <p>Welcom To BiriAPP, Your Trusted Partner in Monoging Your Healthcare Needs Conventiently And Efficiently, At BiriApp, We Understand The Challenges Individuals Fcae When It Comes To Scheduling Doctor Appointments And Their Health Records.</p>
                    <p>BiriApp is Commited To Excellence in Healthcare Technology. We Continuously Strive To Enhance Our Platform, Integrating The Latest Advencements To Improve User Experince And Deliver Superior Service. Whether You're Booking Your First Appointment Or Managing Ongoing Cars, BiriAPP Is Here To Support You Every Step Of The Way.</p>
                    <b className='text-gray-800'>Our Vision</b>
                    <p>Our Vision At BiriAPP Is To Create A Seamless Healthcare Experience For Every User. We Aim To Bridger The Gap Between Patients And HealthCare Providers, Making It Easier For You To Acccess The Care Need, When You Need It.</p>
                </div>
            </div>

            <div className='text-xl my-4'>
                <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
            </div>

            <div className='flex flex-col md:flex-row mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                    <b>Effinciency:</b>
                    <p>Streamlined Appointment Scheduling That Fits Into Your Busy Lifestyle.</p>
                </div>

                <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                    <b>Convenience:</b>
                    <p>Access To A Network Of Trusted Healthcare Professionals In Your Area.</p>
                </div>

                <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                    <b>PERSONALIZATION:</b>
                    <p>Tailored Recommendations And Reminders To Help You Stay On Top Of Your Health.</p>
                </div>
            </div>
        </div>
    )
}

export default About
