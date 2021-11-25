import Image from 'next/image'
import logoRodap from '../../assets/logo_rodap.png'
import iso9001 from '../../assets/selo_ISO_9001_2015.png'
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
            <br />
            Telefone: (31) 3517-7601 <br />
            Serviço de Atendimento ao Cliente: 0800 941 9680
          </p>
          <h2>Uma empresa do grupo Rodap</h2>
          <div>
            <Image
              src={logoRodap}
              height="400px"
              objectFit="contain"
              objectPosition="left"
            />
            <Image
              src={iso9001}
              height="400px"
              objectFit="contain"
              objectPosition="left"
            />
          </div>
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
