import cdlDark from "@/assets/logos/CDL-logo-black.png";
import cdlLight from "@/assets/logos/CDL-logo-white.png";
import Logo from "./templates/Logo";

const Banner = ({ title }: { title: string }) => {
    return (
        <div className="h-[33vh] w-full overflow-hidden relative flex items-center justify-center pt-12">
            <h1 className="z-[2]">{title}</h1>
            <div className="bg-gradient-to-t from-background to-black/0 h-full w-full absolute top-0 left-0 z-[1]"></div>
            <div className="absolute top-0 left-0 w-full h-[150%] flex justify-center items-center">
                <div className="opacity-[3%] scale-150">
                    <Logo
                        srcDark={cdlLight}
                        srcLight={cdlDark}
                        alt="CDL Logo"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
