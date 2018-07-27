import { slide as Menu0 } from 'react-burger-menu';
import { stack as Menu1 } from 'react-burger-menu';
import { elastic as Menu2 } from 'react-burger-menu';
import { bubble as Menu3 } from 'react-burger-menu';
import { push as Menu4 } from 'react-burger-menu';
import { pushRotate as Menu5 } from 'react-burger-menu';
import { scaleDown as Menu6 } from 'react-burger-menu';
import { scaleRotate as Menu7 } from 'react-burger-menu';
import { fallDown as Menu8 } from 'react-burger-menu';
import { reveal as Menu9 } from 'react-burger-menu';

const Menus = [Menu0, Menu1, Menu2, Menu3, Menu4, Menu5, Menu6,
    Menu7, Menu8, Menu9];

const Menu = Menus[Math.floor(Math.random() * Menus.length)];

export default Menu;