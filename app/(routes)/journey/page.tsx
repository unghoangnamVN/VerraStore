'use client'
import { Container } from '@/components/layout/container'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
const JourneyPage = () => {
    const [activeTab, setActiveTab] = useState('life')

    // Function to handle tab switching
    const showTab = (tabName: any) => {
        setActiveTab(tabName)
    }

    return (
        <Container>
            <style>
                {
                    '\
               .shadow-custom, .shadow-lg {\
    box-shadow: 0 0 0 0 #0000, 0 0 0 0 #0000, 0 3px 10px rgba(0, 0, 0, 0.2);\
}\
.shadow-custom {\
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);\
}\
                '
                }
            </style>
            <div className="w-full flex-grow px-10 py-20">
                <div className="flex shadow-custom">
                    <div className="w-full flex items-center gap-10 px-24 py-10">
                        <div className="h-full w-32 flex flex-col justify-between">
                            <a
                                href="#"
                                className={` ${
                                    activeTab === 'life'
                                        ? 'text-primary'
                                        : 'text-primary-foreground'
                                }`}
                                onClick={(e) => {
                                    e.preventDefault()
                                    showTab('life')
                                }}
                            >
                                <p className="font-semibold text-xl __className_7357dc">
                                    Life
                                </p>
                            </a>

                            <a
                                href="#"
                                className={` ${
                                    activeTab === 'musicArt'
                                        ? 'text-primary'
                                        : 'text-primary-foreground'
                                }`}
                                onClick={(e) => {
                                    e.preventDefault()
                                    showTab('musicArt')
                                }}
                            >
                                <p className="font-semibold text-xl  __className_7357dc">
                                    Music & Art
                                </p>
                            </a>

                            <a
                                href="#"
                                className={` ${
                                    activeTab === 'culture'
                                        ? 'text-primary'
                                        : 'text-primary-foreground'
                                }`}
                                onClick={(e) => {
                                    e.preventDefault()
                                    showTab('culture')
                                }}
                            >
                                <p className="font-semibold text-xl __className_7357dc">
                                    Culture
                                </p>
                            </a>

                            <a
                                href="#"
                                className={` ${
                                    activeTab === 'news'
                                        ? 'text-primary'
                                        : 'text-primary-foreground'
                                }`}
                                onClick={(e) => {
                                    e.preventDefault()
                                    showTab('news')
                                }}
                            >
                                <p className="font-semibold text-xl __className_7357dc ">
                                    News
                                </p>
                            </a>
                            <a
                                href="#"
                                className={` ${
                                    activeTab === 'releases'
                                        ? 'text-primary'
                                        : 'text-primary-foreground'
                                }`}
                                onClick={(e) => {
                                    e.preventDefault()
                                    showTab('releases')
                                }}
                            >
                                <p className="font-semibold text-xl __className_7357dc ">
                                    Releases
                                </p>
                            </a>
                        </div>
                        <div className="w-full h-full">
                            <div id="content" className=" ">
                                {activeTab === 'life' && (
                                    <div id="life" className="tab-content">
                                        <div className="flex flex-col gap-4">
                                            <div className="grid grid-cols-2 gap-8">
                                                <div className="relative flex-1 aspect-[4/5]">
                                                    <Link href="/">
                                                        <Image
                                                            src="/images/2.png"
                                                            width={500}
                                                            height={300}
                                                            alt="Life Image"
                                                            className="absolute inset-0 h-full w-full text-transparent"
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="flex flex-col justify-between text-justify">
                                                    <h3 className="font-medium text-primary text-xl ">
                                                        Life
                                                    </h3>
                                                    <h3 className="font-medium text-secondary text-lg ">
                                                        Introduce
                                                    </h3>
                                                    <p className="text-md text-muted-foreground">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipisci elit, sed
                                                        eiusmod tempor incidunt
                                                        ut labore et dolore
                                                        magna aliqua. Ut enim ad
                                                        minim venipsum dolor sit
                                                        amet, consectetur adipi
                                                        sed eiusmod tempor inie
                                                        . Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipisci elit, sed
                                                        eiusmod tempor incidunt
                                                        ut labore et dolore
                                                        magna aliqua. Ut enim ad
                                                        minim venipsum dolor sit
                                                        amet, consectetur adipi
                                                        sed eiusmod tempor inie
                                                        . Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipisci elit, sed
                                                        eiusmod tempor incidunt
                                                        ut labore et dolore
                                                        magna aliqua. Ut enim ad
                                                        minim venipsum dolor sit
                                                        amet, consectetur adipi
                                                        sed eiusmod tempor inie
                                                        .
                                                    </p>
                                                    <p className="text-md text-muted-foreground">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipisci elit, sed
                                                        eiusmod tempor incidunt
                                                        ut labore et dolore
                                                        magna aliqua. Ut enim ad
                                                        minim venipsum dolor sit
                                                        amet, consectetur adipi
                                                        sed eiusmod tempor inie
                                                        . Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipisci elit, sed
                                                        eiusmod tempor incidunt
                                                        ut labore et dolore
                                                        magna aliqua. Ut enim ad
                                                        minim
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="text-sm text-muted-foreground text-justify">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisci elit, sed
                                                eiusmod tempor incidunt ut
                                                labore et dolore magna aliqua.
                                                Ut enim ad minim venipsum dolor
                                                sit amet, consectetur adipi sed
                                                eiusmod tempor inie . Lorem
                                                ipsum dolor sit amet,
                                                consectetur adipisci elit, sed
                                                eiusmod tempor incidunt ut
                                                labore et dolore magna aliqua.
                                                Ut enim ad minim venipsum dolor
                                                sit amet, consectetur adipi sed
                                                eiusmod tempor inie .
                                            </p>
                                        </div>
                                    </div>
                                )}
                                {activeTab === 'musicArt' && (
                                    <div id="musicArt" className="tab-content">
                                        <div className="grid grid-cols-2 gap-8">
                                            <div className="relative flex-1 aspect-[3/4]">
                                                <Link href="/">
                                                    <Image
                                                        src="/images/1.png"
                                                        width={500}
                                                        height={300}
                                                        alt="Music & Art Image"
                                                        className="absolute inset-0 h-full w-full text-transparent"
                                                    />
                                                </Link>
                                            </div>
                                            <div className="flex flex-col gap-1 text-justify justify-between">
                                                <h3 className="font-medium text-primary text-xl __className_7357dc">
                                                    Verra Art
                                                </h3>
                                                <h3 className="font-medium text-secondary text-lg __className_dc5ae8">
                                                    Introduce
                                                </h3>
                                                <p className="text-md text-muted-foreground">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipisci elit,
                                                    sed eiusmod tempor incidunt
                                                    ut labore et dolore magna
                                                    aliqua. Ut enim ad minim
                                                    venipsum dolor sit amet,
                                                    consectetur adipi sed
                                                    eiusmod tempor inie . Lorem
                                                    ipsum dolor sit amet,
                                                    consectetur adipisci elit,
                                                    sed eiusmod tempor incidunt
                                                    ut labore et dolore magna
                                                    aliqua. Ut enim ad minim
                                                    venipsum dolor sit amet,
                                                    consectetur adipi sed
                                                    eiusmod tempor inie . Lorem
                                                    ipsum dolor sit amet,
                                                    consectetur adipisci elit,
                                                    sed eiusmod tempor incidunt
                                                    ut labore et dolore magna
                                                    aliqua. Ut enim ad minim
                                                    venipsum dolor sit amet,
                                                    consectetur adipi sed
                                                    eiusmod tempor inie .
                                                </p>
                                                <p className="text-md text-muted-foreground">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipisci elit,
                                                    sed eiusmod tempor incidunt
                                                    ut labore et dolore magna
                                                    aliqua. Ut enim ad minim
                                                    venipsum dolor sit amet,
                                                    consectetur adipi sed
                                                    eiusmod tempor inie . Lorem
                                                    ipsum dolor sit amet,
                                                    consectetur adipisci elit,
                                                    sed eiusmod tempor incidunt
                                                    ut labore et dolore magna
                                                    aliqua. Ut enim ad minim
                                                    venipsum dolor sit amet,
                                                    consectetur adipi sed
                                                    eiusmod tempor inie .
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeTab === 'culture' && (
                                    <div id="culture" className="tab-content">
                                        <h3 className="font-medium text-primary text-xl __className_7357dc">
                                            Culture
                                        </h3>
                                        <p>Cultural content goes here...</p>
                                    </div>
                                )}
                                {activeTab === 'news' && (
                                    <div id="news" className="tab-content">
                                        <h3 className="font-medium text-primary text-xl __className_7357dc">
                                            News
                                        </h3>
                                        <p>News content goes here...</p>
                                    </div>
                                )}
                                {activeTab === 'releases' && (
                                    <div id="releases" className="tab-content">
                                        <h3 className="font-medium text-primary text-xl __className_7357dc">
                                            Releases
                                        </h3>
                                        <p>Releases content goes here...</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default JourneyPage
