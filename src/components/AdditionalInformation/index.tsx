import { Facebook } from './Facebook'
import { Map } from './Map'
import styles from './styles.module.scss'

export const AdditionalInformation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <p>
            Rua Ana Batista da Cruz, nº 850 <br />
            Belo Vale - Santa Luzia/MG <br />
            Telefone: (31) 3517-7601 <br />
            Serviço de Atendimento ao Cliente: 0800 941 9680
          </p>
        </div>
        <div>
          <Map />
        </div>
        <div>
          <Facebook />
        </div>
      </div>
    </div>
  )
}
