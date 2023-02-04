export interface LayoutProps {
  TopNavBar: React.ReactNode;
  SideNavBar: React.ReactNode;
  ImportButton?: React.ReactNode;
  SearchInput?: React.ReactNode;
}

export interface ThemeProps {
  initialTheme?: string ;
  children?: React.ReactNode;

}
