import React from 'react';
import { Break } from "../../../Break"
import { Icon, EIcon } from '../../../Icon';
import { Text, EColor } from "../../../Text"
import styles from './userblock.sass';
import { createLinkParams } from "../../../../utils/js/createLinkParams";


interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
}

const authParams: {[n: string]: string} = {
  client_id: 'VxRfhdESA8Ms6wZqVG9SFA',
  response_type: 'code',
  state: 'random_string',
  redirect_uri: 'http://localhost:3000/auth',
  duration: 'permanent',
  scope: 'read submit identity',
};

export function UserBlock({ avatarSrc, username }: IUserBlockProps) {
  return (
    <a
      href={`https://www.reddit.com/api/v1/authorize?${createLinkParams(authParams)}`}
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {avatarSrc
          ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage}/>
          : <Icon size={50} name={EIcon.anonim} />
        }
      </div>

      <div className={styles.username}>
        <Break size={12} />
        <Text size={20} color={username ? EColor.black : EColor.grey99} >{username || 'Аноним'}</Text>
      </div>
    </a>
  );
}
