import React from 'react';
import { Break } from "../../Break"
import { EIcon, Icon } from '../../Icon';
import { Ecolor, Text } from "../../Text"
import styles from './userblock.sass';
import { createLinkParams } from "../../../utils/js/createLinkParams";
import { generateRandomString } from "../../../utils/react/generateRandomIndex";


interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
}

const authParams: {[n: string]: string} = {
  client_id: 'D3MkISAKZgrgNQDzaLjFoA',
  response_type: 'code',
  state: generateRandomString(),
  redirect_uri: 'http://localhost:3000/auth',
  duration: 'permanent',
  scope: 'read submit identity',
};

export function UserBlock({ avatarSrc, username }: IUserBlockProps) {
  return (
    <a
      href={`https://www.reddit.com/api/v1/authorize${createLinkParams(authParams)}`}
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
        <Text size={20} color={username ? Ecolor.black : Ecolor.grey99} >{username || 'Аноним'}</Text>
      </div>
    </a>
  );
}
