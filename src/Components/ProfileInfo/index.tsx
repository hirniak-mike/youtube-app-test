import React from 'react';
import { inject, observer } from 'mobx-react';
import { HiUserCircle } from "react-icons/hi";

import { IProps } from './profileInfo.types';

import { SProfileInfo } from './ProfileInfo.style';

const ProfileInfo: React.FC<IProps> = ({ authStore: { sessionUser: { full_name, picture } } }) => {
  return (
    <SProfileInfo>
      <div className='img_wrapper'>
        {picture?.is_silhouette ?
          <HiUserCircle size="25px" /> :
          <img src={picture.url} alt="user_pic" className='user_img' />
        }
      </div>
      <span className='user_name'>{`Hi, ${full_name}`}</span>
    </SProfileInfo>
  )
}

export default inject('authStore')(observer(ProfileInfo));
