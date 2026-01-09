import Header from './components/Header.jsx'
import ImageActions from './components/ImageActions.jsx'
import UploadContainer from './components/UploadContainer.jsx'
import UploadedView from './components/UploadedView.jsx'
import UploadImage from './components/UploadImage.jsx'

function App() {
 

  return (
    <main className='min-h-screen flex flex-col '>
      <Header/>
      <UploadContainer/>
    </main>
  )
}

export default App
