import React from 'react';
import { inject, observer } from 'mobx-react';
import { HiUserCircle } from "react-icons/hi";

import s from './style.module.scss';

const ProfileInfo = ({ authStore: { sessionUser: { full_name, picture } } }) => {
  return (
    <div className={s.profile_wrapper}>
      <div className={s.img_wrapper}>
        {picture?.is_silhouette ?
          <HiUserCircle size="25px" /> :
          <img src={picture.url} alt="user_pic" className={s.user_img} />
        }
      </div>
      <span className={s.user_name}>{`Hi, ${full_name}`}</span>
    </div>
  )
}

export default inject('authStore')(observer(ProfileInfo));
