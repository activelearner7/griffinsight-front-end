import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Modal from "@mui/material/Modal";
import { alpha, styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { getSearch } from "../service/api";
const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
};
const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));
export default function SearchBox() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [count, setCount] = useState("");

    const [data, setData] = useState(0);
    async function search(props) {
        await getSearch(props, (res) => {
            setData(res);
        });
    }
    const handleChange = (e) => {
        if (e.nativeEvent.data == null) {
            setCount(count.slice(0, -1));
        } else {
            setCount(count + e.nativeEvent.data);
        }
        search(count);
    };

    return (
        <div>
            <IconButton onClick={handleOpen} aria-label="search" size="large">
                <SearchIcon style={{ color: "black" }} fontSize="medium" />{" "}
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ "aria-label": "search" }}
                            onChange={handleChange}
                        />
                    </Search>
                    {data ? (
                        data.map((item) => (
                            <Typography
                                id="modal-modal-description"
                                sx={{ mt: 2 }}
                            >
                                <a
                                    href={`/${item.sno}`}
                                    style={{
                                        color: "black",
                                        textDecoration: "None",
                                    }}
                                >
                                    <Button
                                        variant="outlined"
                                        style={{
                                            color: "black",
                                            border: "none",
                                        }}
                                    >
                                        {item.title}
                                    </Button>
                                </a>
                            </Typography>
                        ))
                    ) : (
                        <></>
                    )}
                </Box>
            </Modal>
        </div>
    );
}
