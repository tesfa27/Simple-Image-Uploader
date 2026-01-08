import Header from './components/Header.jsx'
import ImageActions from './components/ImageActions.jsx'
import UploadedView from './components/UploadedView.jsx'
import UploadImage from './components/UploadImage.jsx'

function App() {
 

  return (
    <main className='min-h-screen flex flex-col '>
      <Header/>

      <div className='flex-1 flex justify-center items-center p-4'>
      {/* <div className='bg-surface p-2 w-full max-w-[720px]'>
      <UploadImage/>
      </div> */}
      <div className='flex flex-col gap-4 justify-center items-center'> 

      <div className='bg-surface p-2 w-full max-w-[540px]'>
        <UploadedView/>
      </div>

      <div>
         <ImageActions/>
      </div>

      </div>
      </div>
    </main>
  )
}

export default App
