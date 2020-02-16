import React from 'react'
import GoogleIcon from '../../assets/google_icon.svg'
import TwitterIcon from '../../assets/twitter_icon.svg'
import QiitaIcon from '../../assets/qiita_icon.svg'
import YoutubeIcon from '../../assets/youtube_icon.svg'
import style from "./chooseIcon.module.scss";


const ChooseIcon = ({name}) => {
  switch (name) {
    case 'Twitter':
      return <img src={TwitterIcon} className={style.titleIcon}/>;
    case 'Google':
      return <img src={GoogleIcon} className={style.titleIcon}/>;
    case 'Youtube':
      return <img src={YoutubeIcon} className={style.titleIcon}/>;
    case 'Qiita':
      return <img src={QiitaIcon} className={style.titleIcon}/>;
    default:
      return <img src={TwitterIcon} className={style.titleIcon}/>
  }
};

export default ChooseIcon