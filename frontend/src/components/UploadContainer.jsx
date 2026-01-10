import {useState} from "react";
import Uploadimage from "./UploadImage";
import Loading from "./Loading";
import UploadedView from "./UploadedView";
import ImageActions from "./ImageActions";
import { uploadFile } from "../services/uploadService";

const UploadContainer = () => {
    const [status, setStatus] = useState("idle"); // idle, uploading, success
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const handleFileSelect = async (selectedFile) => {
    setStatus("uploading");
    setError(null);
    
    try {
      const data = await uploadFile(selectedFile); 
      
      setFile(data.url); 
      setStatus("success");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      setStatus("idle");
    }
  };


  return (
    <div className='flex-1 flex justify-center items-center p-4 text-app-text'>
      {status === "idle" && (
        <div className='bg-surface p-2 w-full max-w-[720px]'>
        <Uploadimage onFileSelect={handleFileSelect} />
        </div>
      )}

      {status === "uploading" &&
       <div className='bg-surface p-2 w-full max-w-[720px] text-app-text'>
       <Loading />
       </div>
      }

      {status === "success" &&
       <div className='flex flex-col gap-4 justify-center items-center'> 
       <div className='bg-surface p-2 w-full max-w-[540px]'>
       <UploadedView file={file} />
         </div>
         <div>
         <ImageActions imageUrl={file} />
      </div>
        </div>
       }
    </div>
  );
};

export default UploadContainer;