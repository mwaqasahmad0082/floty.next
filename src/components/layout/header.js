"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

function Navbar() {
  const theme = useTheme();
  const isLgScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
            mb: 2,
          }}
        >
          <Link href={"/"} style={{ display: "flex", alignItems: "center" }}>
            <Image
              className="logo-img"
              src="/assets/logo.svg"
              height={70}
              width={150}
              alt="logo"
            />
          </Link>

          <Box display="flex" justifyContent=" space-around" flexGrow={1}>
            {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {isLgScreen ? (
              <>
                <Link href="/about">
                  <Button
                    className="button-custom"
                    color="inherit"
                    sx={{ color: "black" }}
                  >
                    Solutions
                  </Button>
                </Link>
                <Button
                  className="button-custom"
                  color="inherit"
                  sx={{ color: "black" }}
                >
                  Platform
                </Button>
                <Button
                  className="button-custom"
                  color="inherit"
                  sx={{ color: "black" }}
                >
                  Resources
                </Button>
                <Button
                  className="button-custom"
                  color="inherit"
                  sx={{ color: "black" }}
                >
                  Company
                </Button>
                <Button
                  className="button-custom"
                  color="inherit"
                  sx={{ color: "black" }}
                >
                  Contact Us
                </Button>
              </>
            ) : (
              // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
              <>
                <Button onClick={handleMenuClick} sx={{ color: "black" }}>
                  <DensityMediumIcon />
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <Link href="/about">
                      <Button color="inherit" sx={{ color: "black" }}>
                        Solutions
                      </Button>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Button color="inherit" sx={{ color: "black" }}>
                      Platform
                    </Button>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Button color="inherit" sx={{ color: "black" }}>
                      Resources
                    </Button>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Button color="inherit" sx={{ color: "black" }}>
                      Company
                    </Button>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Button color="inherit" sx={{ color: "black" }}>
                      Contact Us
                    </Button>
                  </MenuItem>
                </Menu>
              </>
            )}
          </Box>

          {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Box
            display="flex"
            alignItems="center"
            gap="0.5rem"
            sx={{ flexDirection: { xs: "column", md: "row" } }}
          >
            <Button
              className="header-btn"
              color="inherit"
              sx={{ color: "black", mx: 1 }}
            >
              Login
            </Button>
            <Button
              className="header-btn"
              color="inherit"
              sx={{ color: "black", mx: 1 }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
