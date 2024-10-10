import { Conteiner, Texto, Titulo } from "./Style";


const Cartao = (props) => (
        <Conteiner>
            <Titulo>
                {props.titulo}
            </Titulo>
            <Texto>
                {props.texto}
            </Texto>
        </Conteiner>
);

export default Cartao;