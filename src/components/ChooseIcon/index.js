import React from 'react'
import GoogleIcon from '../../assets/google_icon.svg'
import TwitterIcon from '../../assets/twitter_icon.svg'
import QiitaIcon from '../../assets/qiita_icon.svg'
import YoutubeIcon from '../../assets/youtube_icon.svg'
import SpotifyIcon from '../../assets/spotify_icon.svg'
import PrtimesIcon from '../../assets/prtimes_icon.svg'
import GithubIcon from '../../assets/github_icon.svg'
import NpmIcon from '../../assets/npm_icon.svg'
import PixivIcon from '../../assets/pixiv_icon.svg'
import AtmarkitIcon from '../../assets/atmarkit_icon.svg'
import HatenaIcon from '../../assets/hatena_icon.svg'
import InfoqIcon from '../../assets/infoq_favicon.ico'
import CodezineIcon from '../../assets/codezine.ico'
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
    case 'Spotify':
      return <img src={SpotifyIcon} className={style.titleIcon}/>;
    case 'Prtimes':
      return <img src={PrtimesIcon} className={style.titleIcon}/>;
    case 'Github':
      return <img src={GithubIcon} className={style.titleIcon}/>;
    case 'Npm':
      return <img src={NpmIcon} className={style.titleIcon}/>;
    case 'Pixiv':
      return <img src={PixivIcon} className={style.titleIcon}/>;
    case 'Atmarkit':
      return <img src={AtmarkitIcon} className={style.titleIcon}/>;
    case 'Hatena':
      return <img src={HatenaIcon} className={style.titleIcon}/>;
    case 'InfoQ':
      return <img src={InfoqIcon} className={style.titleIcon}/>;
    case 'Codezine':
      return <img src={CodezineIcon} className={style.titleIcon}/>;
    default:
      return <img src={TwitterIcon} className={style.titleIcon}/>
  }
};

export default ChooseIcon