export interface Item {
  id: number;
  name: string;
  title: string;
  bannerImg: string;
  contents: string;
  price: number;
  like: number;
  view: number;
  comment: string;
  category: string;
  slideImg: [string];
  mainTopImg: [string];
  mainMidImg: [string];
  mainBottomImg: [string];
}
export interface Contents {
  id: number;
  writer: string;
  profileImg: string;
  image: string;
  title: string;
  content: string;
  date: string;
  like: number;
  comments: Comment;
}
export interface Comment {
  id: number;
  writer: string;
  comment: string;
  date: string;
}
export interface ItemObj {
  item: Item[];
}
export interface SearchItem {
  searchData: Item[];
}
export interface SelectItemObj {
  selectItem(id: number): Item[];
}
export interface ContentsObj {
  contents: Contents[];
}
