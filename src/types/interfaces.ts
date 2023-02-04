//* Bazı sayfalarda aynı component'ler olmayacağı için Optional chaining(?) operatörü kullanıldı //
export interface LayoutProps {
  TopNavBar: React.ReactNode;
  SideNavBar: React.ReactNode;
  ImportButton?: React.ReactNode;
  SearchInput?: React.ReactNode;
}


//* Dark mode context-api //
export interface ThemeProps {
  initialTheme?: string ;
  children?: React.ReactNode;

}


//* Post request //

export type Root = Posts[]
export interface Posts {
  userId?: number
  id?: number
  title?: string
  body?: string
}