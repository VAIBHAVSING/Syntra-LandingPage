import Image from "next/image"
import logo from '../app/favicon.ico'
import BackedbyYC from '../app/Asset/BackedByYC.png'
export default function () {
    return (
        <div className="flex">
            <div className="xl:ml-20 m-4 relative mt-6">
                <Image src={logo} width={60} height={60} alt="Logo" />
            </div>
            <div className="m-4 font-bold dark:text-white text-black text-4xl">
                <div>Syntra</div>
                <div className="mt-2">
                    <Image src={BackedbyYC} alt="Backed By YC" height={35} width={218} />
                </div>
            </div>
        </div>
    )
}