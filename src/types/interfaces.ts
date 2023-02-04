//* Bazı sayfalarda aynı component'ler olmayacağı için Optional chaining(?) operatörü kullanıldı //
export interface LayoutProps {
  TopNavBar: React.ReactNode;
  SideNavBar: React.ReactNode;
  ImportButton?: React.ReactNode;
  SearchInput?: React.ReactNode;
  PostCards?: React.ReactNode;
  TodosCard?: React.ReactNode;
  CommentsCard?: React.ReactNode;
  UsersCard?: React.ReactNode;
  PhotosCard?: React.ReactNode;
  RemovePosts?: React.ReactNode;
}

//* Dark mode context-api //
export interface ThemeProps {
  initialTheme?: string;
  children?: React.ReactNode;
}



//* Page Title //
export interface PageTitleProps {
  title: string;
}



//* Post request //

export type Root = Posts[];
export interface Posts {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}

//* Comments request //

export type CommnetsRoot = Comments[];

export interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

//* Photos request //

export type PhotosRoot = Photos[];

export interface Photos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

//* Todos request //

export type TodosRoot = Todos[];

export interface Todos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

//* Users request //

export type UsersRoot = Users[];

export interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
