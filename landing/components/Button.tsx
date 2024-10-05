"use client"
interface ButtonInterface {
  text: string
}
export default function Button({ text }: ButtonInterface) {
  const link = 'https://calendly.com/ayush-syntra/30min';

  return (
    <div>
      <button className="p-[3px] relative"onClick={()=>{window.location.href=link}} >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          {text}
        </div>
      </button>
    </div>
  );
}

