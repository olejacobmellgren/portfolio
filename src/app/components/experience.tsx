"use client";
import React from 'react';
import Image from 'next/image';
import Python from '../assets/python.png';
import Flutterflow from '../assets/flutterflow.png';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Typescript from '../assets/typescript.png';
import ReactImg from '../assets/react.png';
import FireBase from '../assets/firebase.png';
import Mongo from '../assets/mongo.png';
import { useInView } from "react-intersection-observer";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { data } from '../data/experience';

interface ExperienceProps {
  id: string;
  onChange: (timelineInView: boolean, id: string) => void;
}

function Experience({ id, onChange }: ExperienceProps) {

  const { ref: timelineRef, inView: timelineInView } = useInView({
    threshold: 0.05,
    onChange: (inView) => onChange(inView, id),
  });
  const { ref: techsRef, inView: techsInView } = useInView({
    threshold: 0.1,
  });

  return (
    <div id={id} className="w-full h-screen text-gray-300 mb-[800px]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#E25822]">Experience</p>
        </div>
        <p className="py-6 text-gray-400">{data.comment}</p>
        <div ref={timelineRef} className={`mb-24 ${timelineInView ? "opacity-100 duration-1000" : "xl:opacity-0 blur xl:translate-x-[-100%]"}`}>
          <VerticalTimeline lineColor="#E25822">
            {data.experience.map((item, index) => (
              <React.Fragment key={index}>
                <VerticalTimelineElement
                  icon={item.icon}
                  iconStyle={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#fff", fontSize: '1rem', padding: '2px', boxShadow: '0 0 0 4px #fff' }}
                  contentStyle={{ background: '#0A192F', boxShadow: "none" }}
                  contentArrowStyle={{ borderRight: '7px solid  #E25822' }}
                  style={{ width: '100%' }}
                  visible={true}
                  date={item.date}
                  dateClassName="mx-4">
                  
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <h4 className="text-lg">{item.location}</h4>
                  <p>{item.description}</p>
                </VerticalTimelineElement>
              </React.Fragment>
            ))}
          </VerticalTimeline>
        </div>

        <p className="py-6 text-gray-400">{data.secondComment}</p>
        <div ref={techsRef} className={`w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ${techsInView ? "opacity-100 duration-1000" : "xl:opacity-0 blur xl:translate-x-[-100%]"}`}>
          <div>
            <Image className="w-20 mx-auto hover:scale-110 duration-500" src={Python} alt="python icon" />
            <p>Python</p>
          </div>
          <div>
            <Image className="w-20 mx-auto hover:scale-110 duration-500" src={Typescript} alt="typescript icon" />
            <p>Typescript</p>
          </div>
          <div>
            <Image className="w-20 mx-auto hover:scale-110 duration-500" src={ReactImg} alt="react icon" />
            <p>React</p>
          </div>
          <div>
            <Image className="w-20 mx-auto hover:scale-110 duration-500" src={Flutterflow} alt="flutterflow icon" />
            <p>Flutterflow</p>
          </div>
          <div>
            <Image className="w-20 mx-auto hover:scale-110 duration-500" src={HTML} alt="html icon" />
            <p>HTML</p>
          </div>
          <div>
            <Image className="w-20 mx-auto hover:scale-110 duration-500" src={CSS} alt="css icon" />
            <p>CSS</p>
          </div>
          <div>
            <Image className="w-20 mx-auto hover:scale-110 duration-500" src={FireBase} alt="firebase icon" />
            <p>Firebase</p>
          </div>
          <div>
            <Image className="w-20 mx-auto hover:scale-110 duration-500" src={Mongo} alt="mongodb icon" />
            <p>MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience