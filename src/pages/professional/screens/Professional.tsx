import { useEffect, useRef, useState } from 'react';
import { useProfessionalContext } from '../context/index';
import ProfessionalService from '../services';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import ProfessionalTypeService from '../../professional-type/services';



export default () => {
    const {
        setProfessionalList,
        professionalList,
        id, setId,
        setNome,
        nome,
        setEmail,
        email,
        setTelefone,
        telefone,
        setSituacao,
        situacao,
        professionalTypeId, setProfessionalTypeId
    } = useProfessionalContext();
    const ref = useRef(false)
    const professionalTypeService = new ProfessionalTypeService()
    const [professionalTypeList, setProfessionalTypeList] = useState<Array<any>>([])

    const service = new ProfessionalService()
    const getAll = async () => {
        ref.current = true
        const response = await service.getProfessionalList()
        console.log(response)
        setProfessionalList(response);
        const listPType = await professionalTypeService.getProfessionalTypeList()
        setProfessionalTypeList(listPType);

    }
    useEffect(() => {
        if(ref.current == false)
            getAll()
    })

    const clearFields = () =>{
        setId('')
        setNome('')
        setEmail('')
        setTelefone('')
        setSituacao(true)
    }

    const salvar = async () => {
        console.log(professionalTypeId)
        if(id == ''){
            await service.postProfessional({
                nome,
                email,
                telefone,
                situacao,
                professionalTypeId
            })
        }else{
            await service.updateProfessional(id,{
                nome,
                email,
                telefone,
                situacao,
                professionalTypeId
            })
        }
        clearFields()
        getAll()
    }

    const editar = (id:any)=> {
            const obj =  professionalList.filter((e: any) => e.id == id)[0]
            setId(obj.id)
            setNome(obj.nome)
            setEmail(obj.email)
            setTelefone(obj.telefone)
            setSituacao(obj.situacao)
            
    }
    const remove = async (id:any)=> {
        await service.deleteProfessional(id)
        getAll()
        
}

    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTelefone">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="text" placeholder="Nome" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formSituacao">
                    <Form.Label>Situacao</Form.Label>
                    <Form.Select onChange={(e) => setSituacao(e.target.value)}>
                        <option value="true">Ativo</option>
                        <option value="false">Inativo</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPTList">
                    <Form.Label>Tipo</Form.Label>
                    <Form.Select onChange={(e) => setProfessionalTypeId(e.target.value)}>
                        {professionalTypeList &&
                            professionalTypeList.map((item: any) => {
                                return (
                                    <option key={item.id} value={item.id}>{item.descricao}</option>
                                )
                            })
                        }
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="button" onClick={() => salvar()}>
                    Salvar
                </Button>
            </Form>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Situacao</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {professionalList &&(professionalList.map((item: any) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.email}</td>
                                    <td>{item.telefone}</td>
                                    <td>{item.situacao ? 'Ativo' : 'Inativo'}</td>
                                    <td><Button variant="success" type="button" onClick={() => editar(item.id)}>
                                        Editar
                                    </Button></td>
                                    <td><Button variant="danger" type="button" onClick={() => remove(item.id)}>
                                        Delete
                                    </Button></td>
                                </tr>
                            )
                        }))
                        
                    }
                </tbody>
            </Table>
        </Container>
    );
}