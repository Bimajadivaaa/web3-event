import Head from "next/head";
import { useEffect, useState } from "react";
import EventList from "@/components/EventList";
import Hero from "@/components/Hero";
import { generateEventData } from "@/utils/fakeData";
import { EventStruct } from "@/utils/typeData";
import { NextPage } from "next";

const Page: NextPage<{ eventsData : EventStruct[] }> = ({ eventsData }) => {
    const [end, setEnd] = useState<number>(6)
    const [count] = useState<number>(6)
    const [collection, setCollection] = useState<EventStruct[]>([])

    useEffect(() => {
        setCollection(eventsData.slice(0, end))
    }, [eventsData, end])

    return (
        <div>
            <Head>
                <title>Web3 Events</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Hero/>
            <EventList />
            <div className="mt-10 h-20"></div>
            {collection.length > 0 && eventsData.length > collection.length && (
                <div className="w-full flex justify-center items-center">
                    <button className="bg-orange-500 shadow-md rounded-full py-3 px-4 text-white
                    duration-300 transition-all"
                    onClick={() => setEnd(end + count)}>Load More</button>
                </div>
            )}
        </div>
    )
}
export default Page;

export const getServerSideProps = async() => {
    const eventsData : EventStruct[] = generateEventData(10)
    return {
        props : { eventsData: JSON.parse(JSON.stringify(eventsData))}
    }
}