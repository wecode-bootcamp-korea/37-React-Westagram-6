import React, { useEffect, useState } from 'react';

const User = () => {
  const [userInfoList, setUserInfoList] = useState([]);
  useEffect(() => {
    fetch('/data/userInfoList.json')
      .then(response => response.json())
      .then(result => setUserInfoList(result));
  }, []);
  return (
    <div>
      User
      {
        userInfoList.map(userInfo => {
          return (
            <ul>
              <li>{userInfo.name}</li>
              <li>{userInfo.email}</li>
              <li>{userInfo.phone}</li>
            </ul>
          );
        })

        /* 
      <ul>
        <li>name</li>
        <li>email</li>
        <li>phone</li>
      </ul>
      <ul>
        <li>name</li>
        <li>email</li>
        <li>phone</li>
      </ul>
      <ul>
        <li>name</li>
        <li>email</li>
        <li>phone</li>
      </ul>
      <ul>
        <li>name</li>
        <li>email</li>
        <li>phone</li>
      </ul>
      <ul>
        <li>name</li>
        <li>email</li>
        <li>phone</li>
      </ul>
      <ul>
        <li>name</li>
        <li>email</li>
        <li>phone</li>
      </ul>
      <ul>
        <li>name</li>
        <li>email</li>
        <li>phone</li>
      </ul>
      <ul>
        <li>name</li>
        <li>email</li>
        <li>phone</li>
      </ul>
      <ul>
        <li>name</li>
        <li>email</li>
        <li>phone</li>
      </ul> */
      }
    </div>
  );
};

export default User;
