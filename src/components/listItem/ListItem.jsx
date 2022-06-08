import React,{useState} from 'react';
import {StyledUl as Ul,styledLi as Li,styledA as A} from './listItem.style'

const MultiMenus=({menus})=>{
 const [activeMenus, setActiveMenus] = useState([]);
 let depth =0;
 
 const backClickHandler=(e)=>{
   const childUl=document.getElementById(depth);
   const parentUl=document.getElementById(depth-1)||document.getElementById('main');
   parentUl.style.transform='translateX(0)';
   childUl.style.transform='translateX(100%)';
   depth--;
   setTimeout(()=>{
    setActiveMenus((preState)=>{
      const array=[...preState];
      array.pop();
      return array;
    })
   },500)
 }

 const ListMenu =({data, hasSubMenu,depth })=>{
    const openSubMenuHandler=(e)=>{
    
      setActiveMenus((preState)=>{
        const newMenuArray =[...preState];
        if(e.submenu&&e.submenu.length>1){newMenuArray.push(e.submenu);};
       return newMenuArray;
      }); 
      
      if(e.submenu?.length>1){
        // document.getElementById('main').style.transform='translateX(-100%)';
        const myul=document.getElementById(depth)||document.getElementById('main');
        myul.style.transform='translateX(-100%)';
      }
    }
   
    return (
     <>
      <Li style={{listStyle:'none'}} onClick={openSubMenuHandler.bind(null,data)} role="listitem">
        <A href={data.path} target="_blank">{data.label}</A>
        {hasSubMenu&&(
          // icon 
          <div>&#62;</div>
        )}
      </Li>
     </>
    )
 }

return (
  <>
  {/* main menu */}
  <Ul id='main'>
    {menus.map((menu, index) => {
      return (
        <ListMenu
          data={menu}
          hasSubMenu={menu.submenu?.length>1}
          key={index}
          menuIndex={index}
        />
      );
    })}
  </Ul>
  {/* sub menus */}
  {activeMenus.map((menuArray,index)=>{
    depth++;
    return(
        <Ul id={depth} key={index} showFromRight>
          {/* replace it by an icon */}
          <Li onClick={backClickHandler} style={{zIndex:1,position:'absolute',fontSize:'1.5em',borderBottom:'0.5px white solid'}}>&#60; Back</Li>
          <Ul marginTop={6}>
            { menuArray.map((item,index)=>{
            return(
              <ListMenu depth={depth} data={item} key={index} hasSubMenu={item.submenu?.length>1}/>
            )
            })}
          </Ul>
        </Ul> 
    )
  })}
  </>
);
}

export default MultiMenus;
