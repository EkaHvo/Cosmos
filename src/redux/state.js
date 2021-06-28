import { renderEntireTree } from '../render';

let state = {
  profileState: {
    posts: [
      {id: 1, text: 'Hello, friend', likesCount: 3},
      {id: 2, text: 'Hi, bro!', likesCount: 8}
    ]
  },
  dialogsState: {
    messages: [
      {id: 1, text: 'Hi', author: 'Jake', avatar:'https://s2.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg', alt:'avatar Jake'},
      {id: 2, text: 'How are you?', author: 'Jake', avatar:'https://s2.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg', alt:'avatar Jake'},
      {id: 3, text: 'Where are you come from?', author: 'Lena', avatar:'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/600x380', alt:'avatar Lena'},
      {id: 4, text: 'Do you like potato?', author: 'Jake', avatar:'https://s2.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg', alt:'avatar Jake'}
    ],
    dialogs: [
      {id: 1, name: 'Lena', avatar:'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/600x380', alt:'avatar Lena'},
      {id: 2, name: 'Ivan', avatar:'https://www.vokrug.tv/pic/person/d/2/f/6/d2f68a00833e2bb574becedff71d406a.jpeg', alt:'avatar Ivan'},
      {id: 3, name: 'Dima', avatar:'https://i.pinimg.com/originals/54/30/e6/5430e66ea39afd12ef2ea649faa2bb59.jpg', alt:'avatar Dima'},
      {id: 4, name: 'Sveta', avatar:'http://pm1.narvii.com/6433/d81557a95b90361bbf191fb281113336f34c7e7e_00.jpg', alt:'avatar Sveta'}
    
    ]
  },
  navbarState: {
    sidebar: [
      {id:1, src: '/profile', navItem: 'Profile'},
      {id:2, src: '/dialogs', navItem: 'Messages'},
      {id:3, src: '/music', navItem: 'Music'},
      {id:4, src: '/news', navItem: 'News'},
      {id:5, src: '/settings', navItem: 'Settings'}
    ],
    friends: [
      {id:1, name: 'Lena', avatar:'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/600x380', page: '', alt:'avatar Lena'},
      {id:2, name: 'Ivan', avatar:'https://www.vokrug.tv/pic/person/d/2/f/6/d2f68a00833e2bb574becedff71d406a.jpeg', page: '', alt:'avatar Ivan'},
      {id:3, name: 'Dima', avatar:'https://i.pinimg.com/originals/54/30/e6/5430e66ea39afd12ef2ea649faa2bb59.jpg', page: '', alt:'avatar Dima'}
    ]
  }
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    text: postMessage,
    likesCount: 0
  };

  state.profileState.posts.push(newPost);
  renderEntireTree(state);
}


export default state;