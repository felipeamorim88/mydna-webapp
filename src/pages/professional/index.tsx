import { ProfessionalContextProvider } from "./context"
import Professional from "./screens/Professional"

export default () => 
     (

        <ProfessionalContextProvider>
            <Professional />
        </ProfessionalContextProvider>
    )