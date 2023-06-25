
interface NavItemProps {
  label: string;
  url: string;
  icon?: JSX.Element;
}
export function NavItem({ label, url, icon }: NavItemProps ) {
  return (
    <a 
      href={url}  
      className="flex items-center px-4 h-16 border-y-2 border-blue-300 gap-2"
    >{ icon && icon }{label}</a>
  )
}