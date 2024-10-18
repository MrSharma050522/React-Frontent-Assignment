import { Box, Button, ButtonGroup, Container, Paper, Stack, TextField } from "@mui/material";
import { useState } from "react";

const InputComponent = () => {
    const [numberOfBlueTokens, setNumberOfBlueTokens] = useState("");
    const [blueTokenPrefix, setBlueTokenPrefix] = useState("");
    const [blueTokenPerRow, setBlueTokenPerRow] = useState("");
    const [numberOfRedTokens, setNumberOfRedTokens] = useState("");
    const [redTokenPrefix, setRedTokenPrefix] = useState("");
    const [redTokenPerRow, setRedTokenPerRow] = useState("");


    const [blueTokenArr, setBlueTokenArr] = useState([]);
    const [redTokenArr, setRedTokenArr] = useState([]);
    const [redTokenPerRowCount, setRedTokenPerRowCount] = useState("");
    const [blueTokenPerRowCount, setBlueTokenPerRowCount] = useState("");
    const [btPfx, setBtPfx] = useState("");
    const [rdPfx, setRdPfx] = useState("");

    // function to generate token
    const generateTokenHandler = () => {
        try {
            let arr = [];
            for (let i = 0; i < numberOfBlueTokens; i++) {
                arr.push(i);
            }
            setBlueTokenArr(arr);
            setBlueTokenPerRowCount(blueTokenPerRow);
            setBtPfx(blueTokenPrefix);
            
            arr = [];
            for (let i = 0; i < numberOfRedTokens; i++) {
                arr.push(i);
            }
            setRedTokenArr(arr);
            setRedTokenPerRowCount(redTokenPerRow);
            setRdPfx(redTokenPrefix);
        } catch (error) {
            console.error("Error -> ", error);
        }
    }

    // function to clear token
    const clearTokenHandler = () => {
        try {
            console.log("clearTokenHandler");
            setNumberOfBlueTokens("");
            setBlueTokenPrefix("");
            setBlueTokenPerRow("");
            setBlueTokenArr([]);

            setNumberOfRedTokens("");
            setRedTokenPrefix("");
            setRedTokenPerRow("");
            setRedTokenArr([]);
        } catch (error) {
            console.error("Error -> ", error);
        }
    }
    return (
        <div>
            <Container maxWidth="sm" >
                <Box sx={{ bgcolor: '#cfe8fc', height: 'auto', borderRadius: 2, border: "1px solid black", p: 2, m: 2 }} >

                    <TextField
                        id="number-of-blue-token"
                        name="numberOfBlueTokens"
                        label="Number of Blue Tokens"
                        margin="normal"
                        type="number"
                        value={numberOfBlueTokens}
                        onChange={(event) => setNumberOfBlueTokens(event.target.value)}
                    />
                    <br></br>
                    <TextField
                        id="blue-token-prefix"
                        name="blueTokenPrefix"
                        label="Blue token Prefix"
                        margin="normal"
                        type="text"
                        value={blueTokenPrefix}
                        onChange={(event) => setBlueTokenPrefix(event.target.value)}
                    />
                    <br></br>
                    <TextField
                        id="blue-token-per-row"
                         name="blueTokenPerRow"
                        label="Blue token Per Row"
                        margin="normal"
                        type="number"
                        value={blueTokenPerRow}
                        onChange={(event) => setBlueTokenPerRow(event.target.value)}
                    />
                    <br></br>
                    <TextField
                        id="number-of-red-token"
                        name="numberOfRedTokens"
                        label="Number of Red Tokens"
                        margin="normal"
                        type="number"
                        value={numberOfRedTokens}
                        onChange={(event) => setNumberOfRedTokens(event.target.value)}
                    />
                    <br></br>
                    <TextField
                        id="red-token-prefix"
                        name="redTokenPrefix"
                        label="Red token Prefix"
                        margin="normal"
                        type="text"
                        value={redTokenPrefix}
                        onChange={(event) => setRedTokenPrefix(event.target.value)}
                    />
                    <br></br>
                    <TextField
                        id="red-token-per-row"
                        name="redTokenPerRow"
                        label="Red token Per Row"
                        margin="normal"
                        type="number"
                        value={redTokenPerRow}
                        onChange={(event) => setRedTokenPerRow(event.target.value)}
                    />
                    <br></br>
                    <ButtonGroup variant="contained" aria-label="Basic button group">
                        <Button style={{ margin: "2px" }} onClick={generateTokenHandler}>Generate</Button>
                        <Button style={{ margin: "2px" }} onClick={clearTokenHandler}>Clear</Button>
                    </ButtonGroup>
                </Box>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${blueTokenPerRowCount}, 1fr)`,
                        gap: 2,
                    }}
                >
                    {blueTokenArr?.map((box, i) => (
                        <Box
                            key={i + 1}
                            sx={{
                                width: 100,
                                height: 100,
                                borderRadius: 1,
                                bgcolor: 'primary.main',
                                justifyContent: "center",
                                alignContent: "center"
                            }}
                        >
                            {btPfx}{i+1}
                        </Box>
                    ))}
                </Box>
                <br></br>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${redTokenPerRowCount}, 1fr)`,
                        gap: 2,
                    }}
                >
                    {redTokenArr?.map((box, i) => (
                        <Box
                            key={i + 1}
                            sx={{
                                width: 100,
                                height: 100,
                                borderRadius: 1,
                                bgcolor: 'red',
                                justifyContent: "center",
                                alignContent: "center"
                            }}
                        >
                        {rdPfx}{i+1}
                        </Box>
                    ))}
                </Box>

            </Container>
        </div>
    )
}

export default InputComponent;