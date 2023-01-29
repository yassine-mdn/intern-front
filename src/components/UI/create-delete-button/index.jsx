import React, {useEffect, useState} from "react";
import PopUpAlert from "../pop-up-alert";
import {Menu} from "@headlessui/react";

const CreateDeleteButton = ({target,selectedRows,createFunction,deleteFunction}) => {

    const [option,setOption] = useState("ajouter")

    const selectionLength = selectedRows.length;

    useEffect(() => {
       if (selectionLength > 0){
           setOption("Supprimer")
       }
       else{
           setOption("ajouter")
       }

    },[selectedRows])

    const renderAlert = () => {
      return
    }

    return(
        <Menu>
            <Menu.Button key="delete"  className={(option==="ajouter"?"bg-secondary-500 hover:bg-secondary-600 active:bg-secondary-600":"bg-red-500 hover:bg-red-600 active:bg-red-600")+"drop-shadow-sm rounded-xl p-4 px-6 min-w-[10%] font-semibold text-lg text-white shadow-sm "}
                    onClick={() => {
                        option==="ajouter"?createFunction():deleteFunction()
                        setOption("ajouter")
                    }}
            >
                {option} {(option === "Supprimer" && selectionLength>1) && selectionLength} {target} {option === "Supprimer" &&selectionLength>1 && "s" }
            </Menu.Button>
        </Menu>

    );
};

export default CreateDeleteButton;