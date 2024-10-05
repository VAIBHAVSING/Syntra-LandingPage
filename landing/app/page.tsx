"use client"
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import Logos from '../components/Logos'
import Button from "@/components/Button";
import { Words, Words2 } from "@/components/Text";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import VideoComponent from '@/components/VideoComponent';
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { contents } from '@/components/Content'
import img from './Asset/image.png';
import Image from "next/image";
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import img2 from '@/app/Asset/image.png';
import {InfiniteMovingCards} from '@/components/ui/infinite-moving-cards'
import { testimonials } from "@/components/Testimonials";
import img8 from '@/app/Asset/image8.png'
function Home() {

  return (
    <main>
      <div className='bg-primary1'>
        <div className=" xl:mx-24">
          <div className="flex justify-between pt-10">
            <span className=""> <Logos /></span>
            <span className="flex justify-end mr-20">
              <Button text="Book A Demo" />
            </span>
          </div>
          <div className="xl:flex w-auto">
            <div className="p-4 w-max-[50%] w-[90rem] bg-secondary1 rounded-3xl">
              <br /><br />
              <TypewriterEffect words={Words} />
              <br />
              <TypewriterEffect words={Words2} className="text-xl" />
              <br /><br />
            </div>
            <div className="w-max-[50%]">
              <div className="mx-16  ">
                <VideoComponent url='/demo.mp4' />
              </div>
            </div>
          </div>
        </div><br /><br />
        <div className="flex justify-center"><Button text="Book A Demo" /></div>
        <br /><br />
      </div>
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Unleash the power of <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Scroll Animations
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={img2}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
      <div>
        <div className=" text-black">
          <StickyScroll content={contents} contentClassName="text-black" />
          <div className="mr-48 flex justify-end"><Button text="Book A Demo" /></div>
        </div>
      </div>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
    <div className="bg-primary1 h-48 flex justify-between pt-5">
      <Logos/>
      <div className="flex justify-end">
        
        <div><p data-v-fe8b47af="" className="text-white pr-10"> Reach out to the founders at <br /><a data-v-fe8b47af="" href="mailto:founders@syntra.com" className="email-link"> founders@syntra.com </a></p></div>
      </div>
    </div>
    </main>
  );
}
export default Home;
