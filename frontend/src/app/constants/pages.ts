interface IPage {
  title: string;
  url: string;
  icon: string;
}

const pages: IPage[] = [
  { title: 'Home', url: '/home', icon: 'house' },
  { title: 'Login', url: '/login', icon: 'people' },
  { title: 'Globe', url: '/globe', icon: 'play-circle' },
  { title: 'Search', url: '/search', icon: 'search' },
];
export default pages;
