import styles from './styles.module.scss'

export const Facebook = () => {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.facebookPage} fb-page`}
        data-href="https://www.facebook.com/slfretamento"
        data-tabs="timeline"
        data-width="500"
        // data-height="500"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
        data-lazy="true"
      >
        <blockquote
          cite="https://www.facebook.com/slfretamento"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/slfretamento">Citbus</a>
        </blockquote>
      </div>
    </div>
  )
}
