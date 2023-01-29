import React from "react";
import FileSelector from "../../components/UI/file-upload";
import EtablissementList from "../../components/UI/EtablissementList";
import FileList from "../../components/UI/FileList";

const Home = () => {
  return(
      <div className="w-full h-full">
        <FileSelector/>
      </div>
  )
}

export default Home