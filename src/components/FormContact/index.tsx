import { useSnackbar } from 'notistack'
import { useState } from 'react'
import { useBackdrop } from '../../hooks/useBackdrop'
import { formatPhone } from '../../utils/mask'
import styles from './styles.module.scss'

export const FormContact = () => {
  const [nameValue, setNameValue] = useState<string>('')
  const [emailValue, setEmailValue] = useState<string>('')
  const [phoneValue, setPhoneValue] = useState<string>('')
  const [subjectValue, setSubjectValue] = useState<string>('')
  const [messageValue, setMessageValue] = useState<string>('')

  const { handleOpen: handleOpenBackdrop, handleClose: handleCloseBackdrop } =
    useBackdrop()

  const { enqueueSnackbar } = useSnackbar()

  const handleClickSnackbarVariant = (
    message: string,
    variant: 'success' | 'error' | 'warning' | 'info' | 'default'
  ) => enqueueSnackbar(message, { variant })

  const sendEmail = async () => {
    const body = {
      name: nameValue,
      email: emailValue,
      phone: phoneValue,
      subject: subjectValue,
      message: messageValue
    }

    handleOpenBackdrop()

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify(body)
      })
      const data = await response.json()

      if (response.status === 200 && data.accepted) {
        handleClickSnackbarVariant('Mensagem enviada com sucesso!', 'success')
        setNameValue('')
        setEmailValue('')
        setPhoneValue('')
        setSubjectValue('')
        setMessageValue('')
      } else {
        throw new Error()
      }
    } catch {
      handleClickSnackbarVariant('Erro ao enviar a mensagem', 'error')
    } finally {
      handleCloseBackdrop()
    }
  }

  return (
    <div className={styles.container} id="contact">
      <div className={styles.content}>
        <h1>Fale Conosco</h1>
        <form
          onSubmit={e => {
            e.preventDefault()
            sendEmail()
          }}
        >
          <div>
            <input
              type="text"
              placeholder="Nome completo *"
              minLength={10}
              required
              value={nameValue}
              onChange={e => setNameValue(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email *"
              required
              value={emailValue}
              onChange={e => setEmailValue(e.target.value)}
            />
            <input
              value={phoneValue}
              onChange={e => setPhoneValue(formatPhone(e.target.value))}
              placeholder="Telefone"
            />
            <select
              name="assunto"
              required
              value={subjectValue}
              onChange={e => setSubjectValue(e.target.value)}
            >
              <option value="" hidden>
                Assunto *
              </option>
              <option value="Dúvidas">Dúvidas</option>
              <option value="Orçamentos">Orçamentos</option>
              <option value="Reclamações">Reclamações</option>
              <option value="Sugestões">Sugestões</option>
            </select>
            <textarea
              placeholder="Mensagem *"
              rows={8}
              required
              minLength={15}
              value={messageValue}
              onChange={e => setMessageValue(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  )
}
