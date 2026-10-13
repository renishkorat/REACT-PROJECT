function DestinationCard({ destination, onAdd }) {
    return (
        <div
            className="group bg-[linear-gradient(145deg,#ffffff,#f8fafc)] 
            border border-slate-200 rounded-[20px] overflow-hidden 
            shadow-[0_10px_30px_rgba(15,23,42,0.08)]
            hover:-translate-y-2
            hover:shadow-[0_20px_45px_rgba(15,23,42,0.15)]
            transition-all duration-300"
        >

            {/* IMAGE */}
            <div className="h-[210px] relative overflow-hidden">

                <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover object-center
                    group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.45),transparent_60%)]"></div>

                {/* CATEGORY */}
                <span
                    className="absolute top-3 right-3 z-10
                    px-3 py-1.5 rounded-full
                    bg-[linear-gradient(135deg,#fff7ed,#ffffff)]
                    text-[#a16207]
                    text-[10px] font-bold uppercase tracking-wider shadow-md"
                >
                    {destination.category}
                </span>
            </div>

            {/* CONTENT */}
            <div className="p-5">

                <h3 className="font-serif text-[23px] font-semibold text-[#18212f] mb-1">
                    {destination.name}
                </h3>

                <p className="text-slate-500 text-xs mb-3">
                    📍 {destination.country}
                </p>

                <p className="text-slate-600 text-xs leading-[1.7] min-h-[42px]">
                    {destination.description}
                </p>

                {/* FOOTER */}
                <div className="flex items-end justify-between gap-3 pt-4 mt-4 border-t border-slate-200">

                    <div>
                        <small className="block text-slate-400 text-[9px] uppercase tracking-wider mb-1">
                            Budget
                        </small>

                        <strong
                            className="text-[17px] font-bold
                            bg-gradient-to-r from-[#b45309] to-[#d97706]
                            bg-clip-text text-transparent"
                        >
                            ₹{destination.budget.toLocaleString()}
                        </strong>
                    </div>

                    <button
                        onClick={() => onAdd(destination)}
                        className="px-4 py-2.5 rounded-xl border-none
                        bg-[linear-gradient(135deg,#0f172a,#2563eb,#4f46e5)]
                        text-white text-[11px] font-bold
                        shadow-md
                        hover:scale-105
                        transition-all duration-300"
                    >
                        Add to Trip
                    </button>

                </div>
            </div>
        </div>
    );
}

export default DestinationCard;