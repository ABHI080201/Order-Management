import React from 'react';
import { IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { BsThreeDots } from 'react-icons/bs';

const ThreeDotsMenu = ({ onEdit }) => {
  return (
    <Menu>
      <MenuButton as={IconButton} icon={<BsThreeDots />} variant="outline" />
      <MenuList>
        <MenuItem onClick={onEdit}>Edit</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ThreeDotsMenu;
