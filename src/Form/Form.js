import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Paper from '@mui/material/Paper';
import {
    FormControl,
    Select,
    MenuItem,
    Button,
    OutlinedInput,
} from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Menu from '@mui/material/Menu';

const Form = () => {
    const [select1, setSelect1] = useState("None");
    const [select2, setSelect2] = useState("None");

    const responsiveInput = {
        height: "50px",
        borderRadius: "10px",
        transition: "border-color 0.3s",
    };

    const responsiveInputLabel = {
        color: "black",
        fontSize: "20px",
    };
    const selectIconStyle = {
        color: "black",
        fontSize: "30px",
        borderRadius: "15px",
        marginRight: "10px",
    };

    const underlineStyle = {
        "&:before": {
            borderBottom: "2px solid white 10%",
            content: "''",
            position: "absolute",
            left: 10,
            right: 10,
            bottom: 0,
        },

    };
    return (
        <>
            <form>
                {/* Selectbox1*/}
                <FormControl sx={{ width: "100%", marginTop: "-20px" }}>
                    <p style={responsiveInputLabel}>
                        <b>Song Authentication Quality <span style={{ color: 'red', fontSize: '20px' }}> *</span></b>
                    </p>
                    <Select
                        style={{ ...responsiveInput }}
                        sx={{
                            padding: "10px",
                            fontSize: "20px",
                            "& .MuiSelect-icon": {
                                color: "white", // icon color
                            },
                        }}
                        IconComponent={(props) => (
                            <IoIosArrowDown {...props} style={selectIconStyle} />
                        )}
                        labelId="demo-simple-select-label"
                        id="select1"
                        value={select1}
                        onChange={(e) => setSelect1(e.target.value)}
                    >
                        <MenuItem
                            value={1}
                            style={{
                                borderBottom: "1px solid gray",
                                backgroundColor:"black",
                                fontSize: '20px',
                                borderTopLeftRadius: '10px',
                                borderTopRightRadius: '10px',
                                color:'white',
                            }}
                            onMouseOver={(e) => { e.stopPropagation(); e.preventDefault(); }}
                            className="custom-menu-item"
                        >
                            1 song (Free)
                        </MenuItem>
                        {/* Add the 'menu-item' class to the remaining menu items as well */}
                        <MenuItem
                            value={5}
                            style={{
                                borderBottom: "1px solid gray",
                                backgroundColor:"black",
                                fontSize: '20px',
                                color:'white',
                            }}
                            onMouseOver={(e) => { e.stopPropagation(); e.preventDefault(); }}
                            className="menu-item"
                        >
                            5 songs (40$)
                        </MenuItem>
                        <MenuItem
                            value={10}
                            style={{
                                borderBottom: "1px solid gray",
                                backgroundColor:"black",
                                fontSize: '20px',
                                color:'white',
                            }}
                            onMouseOver={(e) => { e.stopPropagation(); e.preventDefault(); }}
                            className="menu-item"
                        >
                            10 songs (100$)
                        </MenuItem>
                        <MenuItem
                            value={20}
                            style={{
                                borderBottom: "1px solid gray",
                                backgroundColor:"black",
                                fontSize: '20px',
                                color:'white',
                            }}
                            onMouseOver={(e) => { e.stopPropagation(); e.preventDefault(); }}
                            className="menu-item"
                        >
                            20 songs (175$)
                        </MenuItem>
                        <MenuItem
                            value={30}
                            style={{
                                color: "white",
                                background: "black",
                                fontSize: '20px',
                                borderBottomLeftRadius: '10px',
                                borderBottomRightRadius: '10px',
                            }}
                            onMouseOver={(e) => { e.stopPropagation(); e.preventDefault(); }}
                            className="menu-item"
                        >
                            30 songs (235$)
                        </MenuItem>
                    </Select>
                </FormControl>


                {/* Selectbox2*/}
                <FormControl sx={{ width: "100%" }}>
                    <p style={responsiveInputLabel}>
                        <b>Blockchain <span style={{ color: 'red', fontSize: '20px' }}> *</span></b></p>
                    <Select
                        style={responsiveInput}
                        sx={{
                            paddingLeft: "10px",
                            fontSize: "20px",
                            "& .MuiSelect-icon": {
                                color: "white", // icon color
                            },
                        }}
                        IconComponent={(props) => (
                            <IoIosArrowDown {...props} style={selectIconStyle} />
                        )}
                        focused
                        labelId="demo-simple-select-label"
                        id="gender"
                        value={select2}
                        onChange={(e) => setSelect2(e.target.value)}
                    >
                        <MenuItem value={10}style={{
                                borderBottom: "1px solid gray",
                                backgroundColor:"black",
                                fontSize: '20px',
                                borderTopLeftRadius: '10px',
                                borderTopRightRadius: '10px',
                                color:'white',
                            }}
                            onMouseOver={(e) => { e.stopPropagation(); e.preventDefault(); }}
                            className="custom-menu-item"
                        >
                            Mirt on Polygon
                        </MenuItem>
                        <MenuItem value={20}style={{
                                borderBottom: "1px solid gray",
                                backgroundColor:"black",
                                fontSize: '20px',

                                color:'white',
                            }}
                            onMouseOver={(e) => { e.stopPropagation(); e.preventDefault(); }}
                            className="custom-menu-item"
                        >
                            Mirt on Etherium
                        </MenuItem>
                        <MenuItem value={30}style={{
                                borderBottom: "1px solid gray",
                                backgroundColor:"black",
                                fontSize: '20px',
                                borderBottomLeftRadius: '10px',
                                borderBottomRightRadius: '10px',
                                color:'white',
                            }}
                            onMouseOver={(e) => { e.stopPropagation(); e.preventDefault(); }}
                            className="custom-menu-item"
                        >
                            Mirt on Arthinum
                        </MenuItem>
                    </Select>
                </FormControl>

                {/* Radio Select 1*/}
                <FormControl>
                    <p style={responsiveInputLabel}><b>
                        Is this work a standard music rights and Authentication Registration <span style={{ color: 'red', fontSize: '20px' }}> *</span></b></p>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Yes" />
                        <FormControlLabel value="male" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>

                {/* Radio Select 2*/}
                <FormControl>
                    <p style={responsiveInputLabel}><b>
                        Is this work a Generative AI music rights and authentication registration <span style={{ color: 'red', fontSize: '20px' }}> *</span></b></p>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Yes" />
                        <FormControlLabel value="male" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>

                {/* General Input*/}
                <FormControl sx={{ width: '100%', }}>
                    <p style={responsiveInputLabel}><b>If your Registration is Co-Created with Generative AI provide the name of the platform
                        this work was co created on.
                    </b></p>
                    <OutlinedInput
                        style={responsiveInput}
                        sx={{
                            fontSize: '20px',
                        }}
                        aria-describedby="outlined-weight-helper-text"
                        id="Text"
                        type="Text"
                        value={Text}
                    />
                </FormControl>


                {/* Remember Me and Forgot Password links */}
                <p style={{ fontSize: '20px' }}><b>Disclaimer:</b>
                    Please check with the Generative AI platform that you used and verify if you have full
                    ownership of your generative AI musical wprks before submitting this authentication registration.</p>
                {/* Submit Button */}
                <div style={{ display: 'flex', marginLeft: '50%', marginTop: '8%' }}>
                    <Button
                        autoFocus

                        style={{
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            color: '#ed0e67',
                            fontSize: '15px',
                            fontWeight: 'bold',
                            padding: '7px',
                            width: '200px',  // Adjust the width as needed
                            transition: 'background-color 0.3s',
                            '&:hover': {
                                backgroundColor: '#9e1e51',
                            },
                        }}
                    >
                        Previous
                    </Button>
                    <Button
                        autoFocus
                        style={{
                            backgroundColor: '#c41259',
                            borderRadius: '20px',
                            color: 'white',
                            padding: '5px',
                            marginLeft: '20px',
                            fontSize: '15px',
                            fontWeight: 'bold',
                            width: '70%',  // Adjust the width as needed
                            height: '40px',
                            transition: 'background-color 0.3s',
                            '&:hover': {
                                backgroundColor: 'white',
                            },
                        }}
                    >
                        Next
                    </Button>
                </div>


            </form>
        </>
    );
};

export default Form;
