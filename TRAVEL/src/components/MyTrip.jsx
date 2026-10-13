function MyTrip({ trip, dispatch }) {

    const totalBudget = trip.reduce(
        (total, destination) => total + destination.budget,
        0
    );

    return (
        <section
            className="bg-[linear-gradient(135deg,#0f172a,#1e293b,#312e81)]
            rounded-[28px] p-7 md:p-9 mb-7
            shadow-[0_25px_70px_rgba(15,23,42,0.22)]
            border border-white/10"
        >

            {/* HEADER */}
            <div className="flex justify-between items-center gap-5 mb-7 max-[700px]:flex-col max-[700px]:items-start">

                <div>
                    <span className="text-[#f5c878] text-[10px] uppercase tracking-[3px] font-bold">
                        Your Journey
                    </span>

                    <h2 className="font-serif text-[35px] text-white font-semibold mt-1">
                        My Trip
                    </h2>

                    <p className="text-slate-400 text-sm">
                        Selected Destination:{" "}
                        <span className="text-[#f5c878] font-bold">
                            {trip.length}
                        </span>
                    </p>
                </div>

                {trip.length > 0 && (
                    <button
                        onClick={() => dispatch({ type: "CLEAR" })}
                        className="px-4 py-2.5 rounded-xl
                        bg-[linear-gradient(135deg,#7f1d1d,#b91c1c)]
                        text-white text-[11px] font-bold
                        hover:scale-105 transition-all duration-300"
                    >
                        Clear Trip
                    </button>
                )}
            </div>

            {trip.length === 0 ? (

                <div className="py-16 text-center rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-4xl mb-3">
                        ✈️
                    </div>

                    <h3 className="font-serif text-xl text-white">
                        Your trip is empty.
                    </h3>

                    <p className="text-slate-400 text-sm mt-1">
                        Add a destination to get started.
                    </p>
                </div>

            ) : (

                <>
                    {/* TRIP ITEMS */}
                    <div className="flex flex-col gap-4">

                        {trip.map((destination) => (

                            <div
                                key={destination.id}
                                className="group flex items-center gap-5 p-4
                                rounded-2xl
                                bg-[linear-gradient(135deg,#ffffff,#f8fafc)]
                                border border-slate-200
                                hover:border-[#d4a96a]
                                hover:shadow-xl
                                transition-all duration-300
                                max-[600px]:flex-wrap"
                            >

                                {/* IMAGE */}
                                <div className="w-[120px] h-[90px] shrink-0 overflow-hidden rounded-xl shadow-md max-[450px]:w-full max-[450px]:h-[190px]">

                                    <img
                                        src={destination.image}
                                        alt={destination.name}
                                        className="w-full h-full object-cover object-center
                                        group-hover:scale-110
                                        transition-transform duration-700"
                                    />

                                </div>

                                {/* INFO */}
                                <div className="flex-1">

                                    <h3 className="font-serif text-[21px] font-semibold text-[#18212f]">
                                        {destination.name}
                                    </h3>

                                    <p className="text-slate-500 text-xs mt-1">
                                        📍 {destination.country}
                                    </p>

                                    <p className="text-[10px] text-slate-400 uppercase tracking-wider mt-3">
                                        Estimated Cost
                                    </p>

                                    <strong
                                        className="text-lg
                                        bg-gradient-to-r from-[#b45309] to-[#f59e0b]
                                        bg-clip-text text-transparent"
                                    >
                                        ₹{destination.budget.toLocaleString()}
                                    </strong>

                                </div>

                                <button
                                    onClick={() =>
                                        dispatch({
                                            type: "REMOVE",
                                            payload: destination.id
                                        })
                                    }
                                    className="px-3 py-2 rounded-lg
                                    text-[19px] bg-red-600 font-bold text-white
                                    hover:bg-red-50 transition"
                                >
                                    Remove
                                </button>

                            </div>
                        ))}

                    </div>

                    {/* SUMMARY */}
                    <div className="grid grid-cols-2 gap-5 mt-6 max-[700px]:grid-cols-1">

                        <div
                            className="relative overflow-hidden p-6 rounded-2xl
                            bg-[linear-gradient(135deg,#fff7ed,#fef3c7,#fffbeb)]
                            border border-amber-200"
                        >

                            <div className="flex justify-between items-center">

                                <div>
                                    <p className="text-amber-700 text-xs uppercase tracking-wider">
                                        Selected Destination
                                    </p>

                                    <strong className="font-serif text-3xl text-amber-800">
                                        {trip.length}
                                    </strong>
                                </div>

                                <span className="text-3xl">
                                    📍
                                </span>

                            </div>
                        </div>

                        <div
                            className="relative overflow-hidden p-6 rounded-2xl
                            bg-[linear-gradient(135deg,#eff6ff,#dbeafe,#eef2ff)]
                            border border-blue-200"
                        >

                            <div className="flex justify-between items-center">

                                <div>
                                    <p className="text-blue-700 text-xs uppercase tracking-wider">
                                        Estimated Budget
                                    </p>

                                    <strong className="font-serif text-2xl md:text-3xl text-blue-800">
                                        ₹{totalBudget.toLocaleString()}
                                    </strong>
                                </div>

                                <span className="text-3xl">
                                    💰
                                </span>

                            </div>
                        </div>

                    </div>
                </>
            )}

        </section>
    );
}

export default MyTrip;