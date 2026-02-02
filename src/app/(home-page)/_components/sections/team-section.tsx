"use client";

import { useRef } from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";
import { teamMembers } from "@/lib/data/team-data";

gsap.registerPlugin(ScrollTrigger);

export default function TeamSection() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        if (window.innerWidth <= 748 || !sectionRef.current || !wrapperRef.current)
            return;

        gsap.set(".leftBox", { opacity: 1, scale: 1 });

        const section = sectionRef.current;
        const wrapper = wrapperRef.current;

        const rect = wrapper.getBoundingClientRect();
        const totalScroll = rect.x + rect.width - window.innerWidth;

        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: `+=${totalScroll * 2}`,
            scrub: 3,
            pin: true,
            invalidateOnRefresh: true,
        });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: `+=${totalScroll * 2}`,
                scrub: 3,
            },
        });

        timeline.fromTo(
            wrapper,
            { x: 0 },
            {
                x: -totalScroll,
                ease: "none",
            }
        );

        gsap.to(".leftBox", {
            opacity: 0,
            scale: 0,
            ease: "power4.in",
            scrollTrigger: {
                trigger: section,
                start: "70% 90%",
                end: () => `+=${totalScroll * 1}`,
                scrub: 1,
            },
        });
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-fit sm:min-h-screen bg-slate-950 flex flex-col items-center justify-center overflow-x-hidden sm:h-screen sm:overflow-hidden"
        >
            <div className="w-full flex flex-col sm:flex-row sm:items-center py-10">
                <div className="leftBox min-w-90 lg:min-w-[28%] max-w-86 sm:max-w-96 space-y-5 mb-10 sm:mb-0 mx-5 lg:ml-16 md:mx-20 lg:mr-20">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white">
                        <span className="text-transparent" style={{ WebkitTextStroke: "2px white" }}>
                            Meet
                        </span>{" "}
                        Our Team
                    </h1>
                    <p className="text-xs font-medium text-gray-300">
                        Berikut untuk beberapa team yang terlibat di game Sleeping Java.
                        Talented individuals working together to create amazing experiences.
                    </p>
                    <button className="flex items-center gap-0.5 cursor-pointer group w-fit">
                        <HiOutlineArrowUpRight className="w-10 h-10 z-1 sm:z-0 sm:w-14 sm:h-14 text-black sm:text-white bg-white sm:bg-slate-950 border border-white rounded-full p-3 sm:p-4 sm:transition-all sm:duration-300 -mr-11.5 sm:mr-0 sm:group-hover:-mr-14.5 sm:group-hover:bg-white sm:group-hover:text-black sm:group-hover:scale-90" />
                        <p className="bg-slate-950 text-white px-4 sm:px-8 py-2.5 sm:py-4 border border-white rounded-full whitespace-nowrap pl-14 sm:pl-8 sm:transition-all sm:duration-300 sm:group-hover:pl-22.5 font-medium">
                            View All Members
                        </p>
                    </button>
                </div>

                <div
                    ref={wrapperRef}
                    className="relative w-full sm:min-w-max sm:flex-1 overflow-x-auto sm:overflow-visible me-4"
                >
                    <div className="flex gap-8 sm:gap-12 px-5 sm:px-0 sm:pr-16 mb-6 pe-4">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="relative overflow-x-visible">
                                <div className="w-fit p-1 sm:p-2.5 rounded-2xl sm:rounded-4xl flex items-center justify-center shadow-md bg-slate-900">
                                    <div className="rounded-xl sm:rounded-3xl group overflow-hidden relative w-96 h-70 max-w-160 max-h-52 md:w-160 md:h-110 md:max-w-none md:max-h-none">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover max-w-160 w-96 h-70 max-h-52 md:max-w-none md:max-h-none md:w-160 md:h-110 rounded-xl sm:rounded-3xl transition-transform duration-800 ease-out group-hover:scale-105 group-hover:-rotate-1"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent rounded-xl sm:rounded-3xl" />
                                    </div>
                                </div>

                                <p className="absolute text-sm sm:text-base max-w-40 sm:max-w-56 z-10 px-1 sm:px-6 py-1 sm:py-4 bg-slate-900 text-white w-fit border border-slate-700 rounded-md sm:rounded-2xl bottom-31 sm:bottom-36 -left-4 sm:-left-7">
                                    {member.specialty}
                                </p>

                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-center gap-2 sm:gap-8 mt-5">
                                    <div className="flex flex-col gap-1">
                                        <p className="font-semibold text-xl sm:text-3xl text-white">
                                            {member.name}
                                        </p>
                                        <p className="text-sm sm:text-base text-gray-400">
                                            {member.role}
                                        </p>
                                    </div>
                                    <button className="text-xs font-medium px-4 sm:px-8 py-2.5 sm:py-4 border border-white text-white rounded-full bg-transparent hover:bg-white hover:text-black cursor-pointer transition-all duration-300">
                                        VIEW PROFILE
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}