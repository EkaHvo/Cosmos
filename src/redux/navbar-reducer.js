let initialState = {
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

const navbarReducer = (state = initialState, action) => {

  return state;
}

export default navbarReducer;