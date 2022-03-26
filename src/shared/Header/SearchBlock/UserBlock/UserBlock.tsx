import React from 'react';
import { Break } from "../../../Break"
import { Icon, EIcon } from '../../../Icon';
import { Text, EColor } from "../../../Text"
import styles from './userblock.sass';
import { createLink } from "../../../../utils/js/createLink";
import { useUserData } from "../../../../hooks/useUserData";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/reducer";

export function UserBlock() {
  const
    { data: { name, iconImg }, loading } = useUserData(),
    { client_id, redirect_uri } = useSelector<RootState, RootState>(state => state),
    url = `https://www.reddit.com/api/v1/authorize?`,
    params: {[n: string]: string} = {
      client_id: client_id || '',
      response_type: 'code',
      state: 'random_string',
      redirect_uri: redirect_uri || '',
      duration: 'permanent',
      scope: 'read submit identity',
    };

  return (
    <a href={createLink(url, params)} className={styles.userBox} >
      <div className={styles.avatarBox}>
        {iconImg
          ? <img src={iconImg} alt="user avatar" className={styles.avatarImage}/>
          : <Icon size={50} name={EIcon.anonim} />
        }
      </div>

      <div className={styles.username}>
        <Break size={12} />
        {loading ? (
          <Text size={20} color={EColor.grey99} >Загрузка...</Text>
        ) : (
          <Text size={20} color={name ? EColor.black : EColor.grey99} >{name || 'Аноним'}</Text>
        )}
      </div>
    </a>
  );
}
