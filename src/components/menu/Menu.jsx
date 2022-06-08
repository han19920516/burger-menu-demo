import {StyledMenu} from './Menu.styled'
import MultiMenus from '../listItem/ListItem'
import {useRef} from 'react'


const menus = [
  {
    label: "Menu 1",
    path:'',
    submenu:[]
  },
  {
    label: "Menu 2",
    submenu: [
      {
        label: "Sub Menu 1",
        path:'',
      },
      {
        label: "Sub Menu 2",
        path:'',
      }
    ]
  },
  {
    label: "Menu 3",
    submenu: [
      {
        label: "Sub Menu 3-1",
        submenu: [
          {
            label: "Boom 1",
            path:'',
          },
          {
            label: "Boom 2",
            path:'',
          }
        ]
      },
      {
        label: "Sub Menu 3-2",
        submenu: [
          {
            label: "Deep 1",
            path:'',
          },
          {
            label: "Deep 2",
            submenu: [
              {
                label: "Lorem 1",
                path:''
              },
              {
                label: "Lorem 2",
                submenu: [
                  {
                    label: "Super Deep",
                    path:'',
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        label: "Sub Menu 3-3",
        path:'',
      },
      {
        label: "Sub Menu 3-4",
        path:'',
        submenu: [
          {
            label: "Last 1",
            path:'',
          },
          {
            label: "Last 2",
            path:'',
          },
          {
            label: "Last 3",
            path:'',
          }
        ]
      }
    ]
  },
  {
    label: "Menu 4",
    submenu:[]
  }
];


const Menu =({open,setOpen})=>{
  const ref = useRef(null)
  
  return(
    <StyledMenu ref={ref} open={open}>
      <MultiMenus menus={menus} />
    </StyledMenu>
  )
}

export default Menu;