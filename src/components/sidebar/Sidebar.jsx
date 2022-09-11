import {
  ExitToAppOutlined,
  HomeOutlined,
  Settings,
  ShoppingBasketOutlined,
} from "@material-ui/icons";
import React from "react";
import MenuLink from "../menuLink/MenuLink";
import "./sidebar.css";

export default function Sidebar({ name }) {
  console.log('Sidebar Rendered')
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <MenuLink icon={<HomeOutlined />} text="Store" />
        <MenuLink icon={<ShoppingBasketOutlined />} text="Products" />
        <MenuLink icon={<Settings />} text="Settings" />
        <MenuLink name={name} icon={<ExitToAppOutlined />} text="Exit" />
      </div>
    </div>
  );
}
