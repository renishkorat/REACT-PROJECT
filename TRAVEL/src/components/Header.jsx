// function Header(){
//     return(
//     <header className="header">
    
//             <div>
//                 <h1> ✈️Travel Planer</h1>
//                 <p>Plan your next Adventure</p>
//             </div>
        
      
//     </header>
//     );
// }

// export default Header;

function Header() {
    return (
        <header
            className="min-h-[390px] px-[7%] py-[45px] text-white flex items-start justify-between relative overflow-hidden
            bg-[linear-gradient(135deg,#0f172a,#1e3a8a,#312e81)]"
        >
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.95),rgba(30,58,138,0.70),rgba(49,46,129,0.45))]"></div>

            <div className="absolute -right-32 -top-32 w-[450px] h-[450px] rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.15),rgba(255,255,255,0.02))]"></div>

            <div className="relative z-10">
                <h1 className="font-serif text-[clamp(40px,5vw,68px)] leading-none tracking-[-2px] mb-[15px]">
                    ✈️ Travel Planner
                </h1>

                <p className="text-[16px] text-white/80 tracking-[0.5px]">
                    Plan your next Adventure
                </p>
            </div>

            <div className="relative z-10 px-5 py-3 rounded-full border border-white/30 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.05))] backdrop-blur-md text-[13px] font-semibold">
                Plan • Explore • Travel
            </div>
        </header>
    );
}

export default Header;