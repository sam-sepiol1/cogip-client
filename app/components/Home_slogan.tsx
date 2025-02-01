export default function Home_slogan() {
    return (
        <main
            className="w-[1310.17px] h-[434px] flex flex-row items-center justify-between relative mt-32"
            style={{marginLeft: "129.83px"}}>

            <div className="absolute w-[771.04px] h-[409px] -z-10 flex justify-end right-0 bottom-0">
                <img src="/Home/Rectangle%2017.png" alt="Background Shape" className="h-full w-full object-cover"/>
            </div>

            <h2 className="font-home-slogan uppercase text-left w-[511.38px] leading-[1.1] break-words z-10 ml-0 mt-20">
                WORK BETTER IN YOUR COMPANY
            </h2>

            <picture className="relative z-10">
                <img src="/Home/DrawKit%20Vector%20Illustration%20Project%20Manager%20(19)%201.png"
                     alt="Phone illustration" className="w-auto h-auto mr-10 mb-10"/>
            </picture>
        </main>
    );
}