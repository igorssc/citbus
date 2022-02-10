import { useState } from 'react'
import { formatPhone } from '../../utils/mask'
import styles from './styles.module.scss'

export const FormContact = () => {
  const [phoneValue, setPhoneValue] = useState<string>('')

  return (
    <div className={styles.container} id="contact">
      <div className={styles.content}>
        <h1>Fale Conosco</h1>
        <form>
          <div>
            <input type="text" placeholder="Nome completo" required />
            <input type="email" placeholder="Email" required />
            <input
              value={phoneValue}
              onChange={e => setPhoneValue(formatPhone(e.target.value))}
              placeholder="Telefone"
            />
            <select name="assunto" required>
              <option value="" hidden>
                Assunto
              </option>
              <option value="Dúvidas">Dúvidas</option>
              <option value="Orçamentos">Orçamentos</option>
              <option value="Reclamações">Reclamações</option>
              <option value="Sugestões">Sugestões</option>
            </select>
            <textarea
              placeholder="Mensagem"
              rows={8}
              required
              minLength={15}
            ></textarea>
          </div>
          <button>Enviar</button>
        </form>
      </div>
    </div>
  )
}
