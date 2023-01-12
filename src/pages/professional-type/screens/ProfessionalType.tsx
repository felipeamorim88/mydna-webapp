import { useEffect, useRef } from 'react';
import { useProfessionalTypeContext } from '../context/index';
import ProfessionalTypeService from '../services';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';



export default () => {
    const {
        setProfessionalTypeList,
        professionalTypeList,
        id, setId,
        descricao,
        setDescricao,
        setSituacao,
        situacao,
    } = useProfessionalTypeContext();
    const ref = useRef(false)
    
    const getAll = async () => {
        ref.current = true
        const list = await service.getProfessionalTypeList()
        setProfessionalTypeList(list);

    }

    const service = new ProfessionalTypeService()
    useEffect(() => {
        if(ref.current == false)
        getAll()
    })

    const clearFields = () =>{
        setId('')
        setDescricao('')
        setSituacao(true)
    }
    const salvar = async () =>{
        if(id === ''){
            await service.postProfessionalType({
                descricao,
                situacao,
    
            })
        }else{
            await service.updateProfessionalType(id,{
                descricao,
                situacao,
            })
        }
        clearFields()
        getAll()
    }

    const editar = (id:any)=> {
        const obj =  professionalTypeList.filter((e: any) => e.id == id)[0]
        setId(obj.id)
        setDescricao(obj.descricao)
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
                    <Form.Label>Descricao</Form.Label>
                    <Form.Control type="text" placeholder="Nome" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formSituacao">
                    <Form.Label>Situacao</Form.Label>
                    <Form.Select onChange={(e)=> setSituacao(e.target.value)}>
                        <option value="true">Ativo</option>
                        <option value="false">Inativo</option>
                    </Form.Select>                </Form.Group>
                <Button variant="primary" type="button" onClick={() => salvar()}>
                    Salvar
                </Button>
            </Form>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Descricao</th>
                        <th>Situacao</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {professionalTypeList &&
                        professionalTypeList.map((item: any) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.descricao}</td>
                                    <td>{item.situacao ? 'Ativo' : 'Inativo'}</td>
                                    <td><Button variant="success" type="button" onClick={() => editar(item.id)}>
                                        Editar
                                    </Button></td>
                                    <td><Button variant="danger" type="button" onClick={() => remove(item.id)}>
                                        Delete
                                    </Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Container>
    );
}