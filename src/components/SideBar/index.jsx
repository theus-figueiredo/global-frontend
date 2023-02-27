import React from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PublicIcon from '@mui/icons-material/Public';
import HomeIcon from '@mui/icons-material/Home';
import ViewModuleOutlinedIcon from '@mui/icons-material/ViewModuleOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Container } from './style';

export default function SideBar() {


  return (
    <Container>
      <div className='d-flex flex-column flex-shrink-0 p-3' style={{ "width": "280px"}}>
        <span className='fs-4'><PublicIcon /> Global</span>
      <hr />
      <ul className='nav nav-pills flex-column mb-auto'>
        <li className='nav-item'>
          <a href="/" className='nav-link link-dark' aria-current="page" id="hoverable">
            <HomeIcon /> <span>Home Page</span>
          </a>
        </li>
        <li>
          <a href="/os" className='nav-link link-dark' id="hoverable">
            <ViewModuleOutlinedIcon /> <span>Ordens de Serviço</span>
          </a>
        </li>
        <li>
          <a href="/users" className='nav-link link-dark' id="hoverable">
            <PeopleOutlineIcon /> <span>Funcionários</span>
          </a>
        </li>
        <li>
          <a href="/financeiro" className='nav-link link-dark' id="hoverable">
            <AccountBalanceIcon /> <span>Financeiro</span>
          </a>
        </li>
        <li>
          <a href="/livros" className='nav-link link-dark' id='hoverable'>
            <MenuBookIcon /> <span>Livros</span>
          </a>
        </li>
      </ul>
      <hr />
      <div style={{"position" : "fixed", "bottom": "3%"}} id="hoverable">
        <a href='/users/2' className='nav-link link-dark'>
          <AccountCircleIcon /> <span>Perfil</span>
        </a>
      </div>
    </div>
    </Container>
  )
}