import styles from './styles.module.scss'

export const FormContact = () => {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.content}>
        <h1>Fale Conosco</h1>
        <form>
          <div>
            <input type="text" placeholder="Nome completo" />
            <input type="text" placeholder="email" />
            <input type="text" placeholder="telefone" />
            <select name="assunto">
              <option value="assunto 1">Assunto 1</option>
              <option value="assunto 2">Assunto 2</option>
              <option value="assunto 3">Assunto 3</option>
            </select>
            <textarea placeholder="Mensagem" rows={8}></textarea>
          </div>
          <button>Enviar</button>
        </form>
      </div>
    </div>
  )
}
