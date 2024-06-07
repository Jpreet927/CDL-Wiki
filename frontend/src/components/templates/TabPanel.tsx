import { TabItem } from "@/ts/types/TabItem";
import { ReactNode } from "react";

type Props = {
    tabItems: TabItem[];
    children: ReactNode;
    activeTab: number;
    setActiveTab: React.Dispatch<React.SetStateAction<number>>;
};

const TabPanel = ({ tabItems, children, activeTab, setActiveTab }: Props) => {
    return (
        <div>
            <div className="flex gap-8">
                {tabItems.map((item, idx) => {
                    if (idx < tabItems.length - 1) {
                        return (
                            <>
                                <p
                                    className={`hover:text-primary cursor-pointer transition-colors ease-in-out duration-300
                                            ${
                                                activeTab === item.id
                                                    ? "text-primary font-bold"
                                                    : "text-secondary"
                                            }
                                        `}
                                    onClick={() => setActiveTab(item.id)}
                                >
                                    {item.title}
                                </p>
                                <div className="w-[1px] h-[25px] bg-background-2"></div>
                            </>
                        );
                    } else {
                        return (
                            <p
                                className={`hover:text-primary cursor-pointer transition-colors ease-in-out duration-300
                                        ${
                                            activeTab === item.id
                                                ? "text-primary font-bold"
                                                : "text-secondary"
                                        }
                                    `}
                                onClick={() => setActiveTab(item.id)}
                            >
                                {item.title}
                            </p>
                        );
                    }
                })}
            </div>
            <div className="w-full h-[1px] bg-background-2 mt-4"></div>
            {children}
        </div>
    );
};

export default TabPanel;
