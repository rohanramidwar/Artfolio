import React from "react";
import { Link } from "react-router-dom";
import { User, LogOut } from "lucide-react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Tooltip } from "@mui/material";

function ProfileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Tooltip title="Profile">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <img
            className="rounded-full w-[45.33px] h-[45.33px]"
            src="https://i.pinimg.com/564x/4b/cc/54/4bcc54ebe6d0e6700e3df3047c1129c8.jpg"
            alt="profile"
          />
        </Button>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link to="/profile">
          <MenuItem onClick={handleClose} className="flex gap-2">
            <User className="text-gray-700" size={16} />
            <p className="text-gray-700 font-semibold font-['Karla']">
              Profile
            </p>
          </MenuItem>
        </Link>
        <MenuItem onClick={handleClose} className="flex gap-2">
          <LogOut className="text-gray-700" size={16} />
          <p className="text-gray-700 font-semibold font-['Karla']">Sign out</p>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default ProfileMenu;
