import React, { createContext, PropsWithChildren, useContext, useState } from 'react';
const ProfessionalTypeContext = createContext({} as ProfessionalTypeContextState);
export interface ProfessionalTypeContextState {
    id: any;
    setId: React.Dispatch<any>;
    descricao: any;
    setDescricao: React.Dispatch<any>;
    situacao: any;
    setSituacao: React.Dispatch<any>;
    professionalTypeList: Array<any>;
    setProfessionalTypeList: React.Dispatch<any>;
}


export const ProfessionalTypeContextProvider: React.FC<PropsWithChildren<any>> = ({ children }) => {

    const [id,setId] = useState('')
    const [descricao, setDescricao] = useState('')
    const [situacao, setSituacao] = useState(true)
    const [professionalTypeList, setProfessionalTypeList] = useState<Array<any>>([])

    return (
        <ProfessionalTypeContext.Provider
            value={{
                id,setId,
                descricao, setDescricao,
                situacao, setSituacao,
                professionalTypeList, setProfessionalTypeList
            }}>
            {children}
        </ProfessionalTypeContext.Provider>
    );
};

export const useProfessionalTypeContext = () => {
    return useContext(ProfessionalTypeContext);
};
