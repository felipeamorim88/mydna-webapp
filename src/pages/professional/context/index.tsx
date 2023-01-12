import React, { createContext, PropsWithChildren, useContext, useState } from 'react';
const ProfessionalContext = createContext({} as ProfessionalContextState);
export interface ProfessionalContextState {
    id:string;
    setId:React.Dispatch<any>;
    nome: any;
    setNome: React.Dispatch<any>;
    telefone: any;
    setTelefone: React.Dispatch<any>;
    email: any;
    setEmail: React.Dispatch<any>;
    situacao: any;
    setSituacao: React.Dispatch<any>;
    professionalList: any;
    setProfessionalList: React.Dispatch<any>;
    professionalTypeId: any;
    setProfessionalTypeId: React.Dispatch<any>;
}


export const ProfessionalContextProvider: React.FC<PropsWithChildren<any>> = ({ children }) => {

    const [id, setId] = useState('')
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [professionalTypeId, setProfessionalTypeId] = useState(0)
    const [situacao, setSituacao] = useState(true)
    const [professionalList, setProfessionalList] = useState<Array<any>>([])

    return (
        <ProfessionalContext.Provider
            value={{
                id, setId,
                nome, setNome,
                telefone, setTelefone,
                email, setEmail,
                professionalTypeId, setProfessionalTypeId,
                situacao, setSituacao,
                professionalList, setProfessionalList
            }}>
            {children}
        </ProfessionalContext.Provider>
    );
};

export const useProfessionalContext = () => {
    return useContext(ProfessionalContext);
};
