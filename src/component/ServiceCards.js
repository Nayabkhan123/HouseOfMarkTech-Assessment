import React from 'react'

const ServiceCards = () => {
    // services array 
    const services = [
        { title: "Branding", description: "We offer comprehensive branding solutions to establish your unique identity. From logo design to brand messaging, we help you stand out and connect with your audience." },
        { title: "Content creation", description: "Our expert content creators craft engaging and impactful content tailored to your brand’s voice, ensuring your message resonates across all platforms." },
        { title: "Social Media", description: "Boost your online presence with our social media management services. We create, curate, and strategize content to build a loyal audience and drive meaningful engagement." },
        { title: "PR Outreach", description: "Enhance your brand's visibility with our PR outreach services. We connect you with media outlets, influencers, and industry leaders to amplify your message." },
        { title: "Consultation", description: "Our personalized consultation services provide actionable insights and strategies to help your brand grow, thrive, and navigate the competitive market." },
        { title: "Website And App Development", description: "From concept to launch, we design and develop user-friendly websites and apps that align with your brand, providing seamless digital experiences for your audience." },
        { title: "VisualEffects Animation and CGI", description: "Bring your vision to life with our cutting-edge visual effects, animation, and CGI services. We create stunning visuals that captivate your audience and enhance your storytelling." },
        { title: "Pre-Wedding Cinematics", description: "Capture your love story with our cinematic pre-wedding shoots. Our expert team creates beautifully crafted films that turn your special moments into lifelong memories." },
        { title: "Trademark And IP", description: "Protect your brand's identity with our trademark and intellectual property services. We provide expert guidance to secure your assets and safeguard your business." },


    ];
  return (
    <div id='our-services' className='w-full my-2'>
        <p className='text-4xl my-4 font-bold'>Our Services</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap items-center justify-center gap-6 border-2 p-6'>
            {
                services.map((service)=>{
                    return (
                        <div className="border p-6 rounded-lg hover:shadow-xl hover:bg-gray-400 hover:scale-105 hover:rotate-3 hover:text-white cursor-pointer duration-200 transition-all">
                            <h3 className="text-xl mb-2 font-semibold">{service.title}</h3>
                            <p>{service.description}</p>
                            <button className='bg-gray-700  hover:bg-black mt-4 px-2 py-1 rounded cursor-pointer text-white'>Know more</button>
                        </div>
                    )
                })
            }
        </div>
        
    </div>
  )
}

export default ServiceCards