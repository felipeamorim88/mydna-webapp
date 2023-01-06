import { ProfessionalTypeContextProvider } from "./context"
import ProfessionalType from "./screens/ProfessionalType"

export default () => 
     (

        <ProfessionalTypeContextProvider>
            <ProfessionalType />
        </ProfessionalTypeContextProvider>
    )