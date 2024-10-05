import Image from "next/image";
import img1 from '@/app/Asset/image1.png'
import img2 from '@/app/Asset/image2.png'
import img3 from '@/app/Asset/image3.png'
import img4 from '@/app/Asset/image4.png'
import img5 from '@/app/Asset/image5.png'
import img6 from '@/app/Asset/image6.png'
export const contents=[{
    title:'Fully Automated AI Scribing',
    description: 'Through ambient listening, our AI-powered scribing solution captures and summarizes your patient encounters in real-time. Dictation-based edits available before approval and release.',
    content:(<div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={img1}
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>)
  },{
    title:'AI-Powered Clearinghouse',
    description: 'Our AI-biller and clearinghouse automate coding and claim submission while fighting your denials. What usually takes manual back-and-forth is now supercharged by our end-to-end workflow.',
    content:(<div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={img2}
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>)
  },{
    title:'Managed Inventory',
    description: 'Reorder supplies with one click through our intelligent inventory system. Syntra learns how much inventory is used per each appointment and automatically re-order any inventory with admin approval.',
    content:(<div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={img3}
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>)
  },{
    title:'Custom Patient Portal',
    description: "Auto-collect and verify your patients' data and collect co-pays before appointments. From insurance verification to document signing, our patient portal minimizes your friction during intake.",
    content:(<div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={img4}
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>)
  },{
    title:'At-Risk Patient Follow-up',
    description: 'Remind high-risk patients to come to the office with our AI-driven follow-up system. Post visit, instructions and follow up consultation information are automatically messaged to patients.',
    content:(<div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={img5}
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>)
  },{
    title:'Specialty Customizable',
    description: 'We recognize the various needs for specialty practices and offer a broad range of customizable add-ons to satisfy all your automation needs.',
    content:(<div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={img6}
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>)
  },]
  