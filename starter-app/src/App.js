import { GeistProvider, CssBaseline } from '@geist-ui/core'
import Home from './Components/giest';


function App(){
    return(
        <GeistProvider>
            <CssBaseline /> 
            <Home /> 
        </GeistProvider>
    )
}

export default App;