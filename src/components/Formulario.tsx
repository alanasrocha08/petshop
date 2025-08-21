import estilos from "./Formulario.module.css";

export default function Formulario() {
  return (
    <form action="" className={estilos.formulario}>
      <div className={estilos.campo}>
        <label htmlFor="">Nome</label>
        <input
          type="text"
          name="nome"
          id="nome"
          placeholder="Informe um e-mail válido"
        />
      </div>
      <div className={estilos.campo}>
        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          name="mensagem"
          id="mensagem"
          rows={5}
          placeholder="Escreva uma mensagem aqui"
        ></textarea>
      </div>
      <div className={estilos.campo}>
        <button type="submit" className={estilos.botao}>
          Enviar
        </button>
      </div>
    </form>
  );
}
