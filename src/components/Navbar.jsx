import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import logo from '../logos/shalis.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];
  return (
    <>
      {/* Fancy Header Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          background: '#fff',
          color: '#d72660',
          height: 70,
          boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
          position: 'sticky',
          top: 0,
          zIndex: 1100,
        }}
      >
        <IconButton
          onClick={() => setOpen(true)}
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ ml: 2 }}
        >
          <MenuIcon style={{ color: '#d72660' }} />
        </IconButton>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={logo} alt="Shalis Couture Logo" style={{ height: 48, marginRight: 12 }} />
          <span style={{ fontWeight: 'bold', fontSize: 28, letterSpacing: 2, color: '#d72660', fontFamily: 'cursive' }}>
            Shalis Couture
          </span>
        </div>
        {/* Optionally add icons or actions on the right */}
        <div style={{ width: 48 }}></div>
      </div>
      {/* Drawer for navigation */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <div
          style={{ width: 250, background: '#fff', height: '100%' }}
          role="presentation"
          onClick={() => setOpen(false)}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 16 }}>
            <img src={logo} alt="Shalis Couture Logo" style={{ height: 56, marginBottom: 8 }} />
            <h1
              style={{
                fontWeight: "bold",
                fontSize: 22,
                color: "#d72660",
                textAlign: 'center',
                fontFamily: 'cursive',
                margin: 0,
              }}
            >
              Shalis Couture
            </h1>
          </div>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem button key={item.label}>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
}
