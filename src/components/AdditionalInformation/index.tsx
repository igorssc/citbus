import Image from 'next/image'
import facebookIcon from '../../assets/facebook.svg'
import instagramIcon from '../../assets/instagram.svg'
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
            Av. das Indústrias, nº 680, Sala 103 <br />
            Vila Olga - Santa Luzia/MG - 33.030-510 <br />
            <br />
            Telefone: (31) 3517-7601 <br />
            Serviço de Atendimento ao Cliente: 0800 941 9680
          </p>
          <h2>Uma empresa do grupo Rodap</h2>
          <div className={styles.logos}>
            <Image src={logoRodap} height="400px" objectFit="contain" />
            <Image src={iso9001} height="400px" objectFit="contain" />
          </div>
          <h2>Nos sigam em nossas redes sociais:</h2>
          <div className={styles.socialMedias}>
            <a
              href="https://www.instagram.com/slfretamento"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={instagramIcon}
                alt="Instagram"
                width="40px"
                height="40px"
                objectFit="contain"
              />
            </a>
            <a
              href="https://facebook.com/slfretamento"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={facebookIcon}
                alt="Facebook"
                width="40px"
                height="40px"
                objectFit="contain"
              />
            </a>
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
