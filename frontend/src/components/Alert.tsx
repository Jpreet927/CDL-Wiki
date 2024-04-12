import { ReactNode } from "react";

const Alert = ({ children }: { children: ReactNode }) => {
    return (
        <div className="px-12 py-6 bg-background-2 flex gap-8">
            <div className="relative flex items-center">
                <div className="flex items-center justify-center">
                    <div className="bg-stat-red h-[20px] w-[20px] rounded-full blur-md animate-pulse absolute"></div>
                    <div className="bg-stat-red h-[10px] w-[10px] rounded-full absolute"></div>
                </div>
            </div>
            {children}
        </div>
    );
};

export default Alert;
