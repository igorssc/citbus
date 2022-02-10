import styles from './styles.module.scss'

export const FormContact = () => {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.content}>
        <h1>Fale Conosco</h1>
        <form>
          <div>
            <input type="text" placeholder="Nome completo" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Telefone" />
            <select name="assunto">
              <option selected disabled>
                Assunto
              </option>
              <option value="Dúvidas">Dúvidas</option>
              <option value="Orçamentos">Orçamentos</option>
              <option value="Reclamações">Reclamações</option>
              <option value="Sugestões">Sugestões</option>
            </select>
            <textarea placeholder="Mensagem" rows={8}></textarea>
          </div>
          <button>Enviar</button>
        </form>
      </div>
    </div>
  )
}
