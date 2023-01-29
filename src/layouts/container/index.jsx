import React, {useEffect, useState} from "react";
import Sidebar from "../../components/UI/side-bar";
import Topbar from "../../components/UI/top-bar";
import {ScreenWidthContext} from "../../contex/ScreenWidthContext";
import {QueryClient, QueryClientProvider} from "react-query";
import {Outlet} from "react-router-dom";
import Bottombar from "../../components/UI/bottom-bar";
import {ShowSidebarContext} from "../../contex/ShowSidebarContext";
import TabBar from "../../components/UI/tab-bar";

const Container = ({children,sidebar,role}) => {


    const [width, setWidth] = React.useState(window.innerWidth);
    const [isVisible, setVisible] = useState(() => {

        return width > 1280;
    })


    useEffect(() => {
        if (width < 1280) {
            setVisible(false)
        } else setVisible(true)


    }, [width]);

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const queryClient = new QueryClient();

    return (
        <div className="h-full m-0 overflow-hidden h-full scrollbar-hide">
            <QueryClientProvider client={queryClient}>
                <ScreenWidthContext.Provider value={width}>
                    <ShowSidebarContext.Provider value={{isVisible,setVisible}}>
                        <Sidebar />
                        <Topbar />
                    </ShowSidebarContext.Provider>
                    <div
                        className="xl:pl-[15%] pt-16 pb-20 sm:pb-0 flex flex-col items-center h-screen justify-center scrollbar-hide bg-gray-50 dark:bg-gray-900 z-0" >
                        <div className="flex flex-col gap-4 p-4 w-full h-full overflow-y-scroll scrollbar-hide">
                            <Outlet/>
                        </div>
                    </div>
                    <Bottombar/>
                </ScreenWidthContext.Provider>
            </QueryClientProvider>
        </div>
    );

};

export default Container;