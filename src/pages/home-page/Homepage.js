import React, {useState} from "react";
import Sidebar from "../../components/UI/side-bar/Sidebar";
import Contentcontainer from "../../components/UI/content-container/Contentcontainer";
import Topbar from "../../components/UI/top-bar/Topbar";
import TabBar from "../../components/UI/tab-bar/TabBar";
import DynamicTable from "../../components/UI/dynamic-table";

const Homepage = () => {

    const [visible, setVisible] = useState(false)

    const ExpandedComponent = ({data}) => <pre>{JSON.stringify(data, null, 2)}</pre>;



    return (
        <div className="h-full m-0 overflow-hidden h-full scrollbar-hide">
            <Sidebar/>
            <Topbar/>
            <div
                className="xl:pl-[15%] pt-16 flex flex-col items-center h-screen justify-center scrollbar-hide bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col gap-4 p-4 w-full h-full overflow-y-scroll">
                        <DynamicTable/>
                </div>
            </div>

        </div>
    );

};

export default Homepage;