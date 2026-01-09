import {useState} from "react";
import Uploadimage from "./UploadImage";
import Loading from "./Loading";
import UploadedView from "./UploadedView";
import ImageActions from "./ImageActions";

const UploadContainer = () => {
    const [status, setStatus] = useState("idle"); // idle, uploading, success

  return (
    <div className='flex-1 flex justify-center items-center p-4 text-app-text'>
      {status === "idle" && (
        <div className='bg-surface p-2 w-full max-w-[720px]'>
        <Uploadimage />
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
       <UploadedView />
         </div>
         <div>
         <ImageActions/>
      </div>
        </div>
       }
    </div>
  );
};

export default UploadContainer;