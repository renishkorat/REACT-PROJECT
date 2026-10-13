import { useState } from "react";
import DestinationCard from "./DestinationCard";

function DestinationExplorer({ destinations, onAdd }) {

    const [search, setSearch] = useState("");

    const filterDestinations = destinations.filter(
        (destination) =>
            destination.name
                .toLowerCase()
                .includes(search.toLowerCase())
    );

    return (
        <section
            className=" rounded-[28px]
    p-7 md:p-9
    mb-7

    bg-[linear-gradient(135deg,#ffffff_0%,#eef2ff_45%,#e0e7ff_100%)]

    border border-white
    shadow-[0_20px_60px_rgba(15,23,42,0.10)]"
        >

            <div className="flex justify-between items-end gap-6 mb-8 max-[700px]:flex-col max-[700px]:items-stretch">

                <div>

                    <span
                        className="inline-block mb-2 text-[10px] font-bold
                        uppercase tracking-[3px]
                        bg-linear-to-r from-blue-600 to-purple-600
                        bg-clip-text text-transparent"
                    >
                        Explore
                    </span>

                    <h2 className="font-serif text-[32px] font-semibold text-[#18212f]">
                        Explore Destinations
                    </h2>

                    <p className="text-slate-500 text-sm mt-1">
                        Find your perfect destination.
                    </p>
                </div>

                {/* SEARCH */}
                <div
                    className="w-72.5 h-12.5 flex items-center gap-2 px-4
                    rounded-xl
                    bg-[linear-gradient(135deg,#ffffff,#f8fafc)]
                    border border-slate-200
                    focus-within:border-blue-400
                    focus-within:shadow-[0_0_0_4px_rgba(59,130,246,0.08)]
                    max-[700px]:w-full"
                >
                    <span className="text-sm">
                        🔍
                    </span>

                    <input
                        type="text"
                        placeholder="Search Destination..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full border-none outline-none bg-transparent text-[13px] text-slate-700"
                    />
                </div>

            </div>

            {filterDestinations.length === 0 ? (

                <div
                    className="py-16 text-center rounded-2xl
                    bg-[linear-gradient(135deg,#eff6ff,#f5f3ff)]
                    border border-dashed border-blue-200"
                >
                    <div className="text-4xl mb-3">
                        🔍
                    </div>

                    <h3 className="font-serif text-xl text-[#18212f]">
                        No Destination Found
                    </h3>

                    <p className="text-slate-500 text-sm mt-1">
                        Try another destination.
                    </p>
                </div>

            ) : (

                <div className="grid grid-cols-4 gap-5 max-[1100px]:grid-cols-2 max-[700px]:grid-cols-1">

                    {filterDestinations.map((destination) => (
                        <DestinationCard
                            key={destination.id}
                            destination={destination}
                            onAdd={onAdd}
                        />
                    ))}

                </div>
            )}

        </section>
    );
}

export default DestinationExplorer;