
import Image from "next/image";

const Sec2 = () => {
    return (
        <div className="overflow-hidden">
            <div className="relative">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/Group.png"
                        alt="background"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="md:px-32 px-10 bg-black flex flex-col md:flex-row justify-center items-center relative">
                <div className="full md:w-1/2 h-fit">
                    <p className="text-[#CCFF00] text-sm">
                        Welcome to MySounds Global, where music isn&apos;t just streamed—it&apos;s
                        empowered. We&apos;re here to amplify underground voices, push new genres,
                        and create space for sounds that deserve to shine.
                        This is more than a platform, it&apos;s a movement. Listeners unlock exclusive
                        tracks, connect with rising stars, and directly support the artists shaping the
                        future of music.
                    </p>
                    <p className="text-white text-sm pt-5">
                        Whether you&apos;re an artist striving to break through or a listener seeking culture
                        beyond the mainstream, this is your soundscape
                    </p>
                    <button className="rounded-md w-32 h-10 my-5 text-center text-white font-semibold bg-[#CCFF00]">
                        Learn more
                    </button>
                </div>
                <div className="relative w-full h-full">
                    <Image src="/person.png" width={900} height={900} alt="man" />
                </div>
                <div className="absolute top-[76%] md:top-[26%] md:right-[120px] right-[40px]  md:p-4 ">
                    <Image
                        width={150}
                        height={119}
                        src="/ca2.png"
                        alt="card 1"
                        className="w-[50px] md:w-[100px] h-auto"
                    />
                </div>

                <div className="absolute md:bottom-[10%] bottom-[1%] left-[20%] md:left-[55%] p-2 md:p-4 ">
                    <Image
                        width={150}
                        height={119}
                        src="/card 2.png"
                        alt="card 1"
                        className="w-[60px] md:w-[100px]"
                    />
                </div>
            </div>
            {/* Bottom stats section */}
            <div className=" bg-[#c2ee03] py-8 w-screen">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center text-black max-w-[1300px] mx-auto">
                        <div>
                            <p className="text-4xl font-bold">150K+</p>
                            <p className="text-sm mt-2">Our Happy Visitors</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold">50+</p>
                            <p className="text-sm mt-2">Our Popular Artist</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold">100+</p>
                            <p className="text-sm mt-2">Our Business Partner</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold">750+</p>
                            <p className="text-sm mt-2">Our Coming Event</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold">20+</p>
                            <p className="text-sm mt-2">Our Media Partner</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sec2;
