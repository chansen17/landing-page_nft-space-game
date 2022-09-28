import React, { useState} from 'react'

let options = [
    {
        id: 0,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut iverra.',
    },
    {
        id: 1,
        question: 'Constetur adipiscing elit, euismod quis viverra nibh cras pulvinar mattisra?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    },
    {
        id: 2,
        question: 'Ac ut consequat semper viverra?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    },
    {
        id: 3,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, senna aliqua. Euismod quis viverra nibh cras pulvinar mattis. Ac ut consequat semper viverra?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem magna aliqua. Euismod quis viverra nibh cras pulvinar mattis.',
    },
]

export default function FAQ() {

    const [activeAccordian, setActiveAccordian] = useState(false);

    const handleToggle = (index) => {
        setActiveAccordian(index);
    }

  return (
    <div className="h-fit w-full py-12 md:py-24">
        <div className="max-w-[1440px] mx-auto px-5">
            <div className="w-full py-4">
                <h2 className="font-['Monoton'] flex justify-center text-4xl md:text-6xl lg:text-8xl">FAQ</h2>
            </div>
            {/* accordian */}
            <section className="py-6 space-y-12 relative">
            <div className="absolute top-10 left-10 bg-gradient-to-br from-slate-900 to-cyan-500 blur-3xl rounded-full h-44 w-96 -z-10" />
            <div className="absolute bottom-16 right-16 bg-gradient-to-br from-orange-500 to-cyan-500 blur-3xl via-slate-900 rounded-tl-full rotate-45 h-44 w-96 -z-10" />
            {options?.map(option => (
                <div key={option?.id} className={activeAccordian === option?.id ? "py-6 px-2 z-10" : "bg-none py-6 px-2 z-10"}>
                    <div className="">
                        <h2 onClick={() => handleToggle(option?.id)} className={activeAccordian === option?.id ? "cursor-pointer text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-orange-500 to-cyan-500 bg-clip-text text-transparent hover:text-white duration-300" : "cursor-pointer text-lg md:text-xl lg:text-2xl text-cyan-500"}>{option?.question}</h2>
                        <p className={activeAccordian === option?.id ? "animate animate__animated animate__fadeInUp text-md md:text-lg" : "hidden"}>{option?.answer}</p>
                    </div>
                </div>
            ))}
            </section>
        </div>
    </div>
  )
}
