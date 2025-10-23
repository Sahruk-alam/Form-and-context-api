import './App.css'
import FamilyTree from './component/FamilyTree/FamilyTree'
import GrandFather from './component/FamilyTree/GrandFather'
import FormButton from './component/FormButton/FormButton'
import FormControl from './component/FormControl/FormControl'
import ProductManagement from './component/ProductManagement/ProductManagement'
import Uncontrolled from './component/Uncontrolled/Uncontrolled'
// import HookForm from './CustomHook/HookForm'

function App() {
  return (
    <div className='text-center' >
      <p>hi i am sahruk</p>
     
      {/* <FormButton> </FormButton> */}
      {/* <FormControl></FormControl> */}
     {/* <HookForm> </HookForm> */}
     {/* <Uncontrolled></Uncontrolled> */}
     <ProductManagement></ProductManagement>
    <FamilyTree></FamilyTree>
    </div>
  )
}

export default App
