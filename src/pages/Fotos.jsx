import { useSearchParams } from "react-router-dom";
import FotoCard from "../components/FotoCard/FotoCard";
import ListContainer from "../components/ListContainer/ListContainer";
import brutos from "../data/computadores.json";
import Protegida from "./Protegida";
import { useEffect, useState } from "react";

const Fotos = () => {
  const [dados, setDados] = useState(brutos);
  const [dadosFiltrados, setDadosFiltrados] = useState(brutos);
  const [parametros, setParametros] = useSearchParams();

  useEffect( () => {
    if(parametros.has('chave')){
      setDados(brutos.filter(
        (ele) => ele.id == parametros.get('chave')
      ))
    }
  }, [parametros])

  const pesquisar = (entrada) => {
    setDados(brutos.filter(
            (ele) => ele.nome.includes(entrada) || ele.link_original.includes(entrada)
          ))
    }

  useEffect( () => {
    if (parametros.has('chave')){
      setDadosFiltrados(brutos.filter(
        (ele) => ele.id == parametros.get('chave')
      ))
    }
    else{
      setDadosFiltrados(brutos)
    }
    setDadosFiltrados(dadosFiltrados);
  }, [parametros] )
  
  return (
      <Protegida>
        <input type="text"
          onChange={ (e) => filtro(e.target.value)}
        />
        <select onChange={ (e) => {parametros.set('chave', e.target.value); setParametros(parametros)}}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <ListContainer>
          {dados.map(
            (el, index) => (
              <FotoCard 
                key={index}
                titulo={el.nome}
                src={`${process.env.PUBLIC_URL}/${el.url}`}
                link_original={el.link_original}
                agradecimento={el.agradecimento}
              />
              )
          )}
          </ListContainer>
      </Protegida>      
 )
};

export default Fotos;