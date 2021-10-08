import React, { useEffect, useState } from "react";
import { makeStyles} from "@material-ui/styles";
import { IconButton, Paper, Stack } from "@mui/material";
import Menu from "@mui/icons-material/Menu";
import { ClassNames } from "@emotion/react";
import { Button, Container, TextField, Autocomplete} from "@mui/material";
import axios from "axios"
import { addCiclo, getAllCiclos } from "../Services/Ciclo";



export default function Ciclo() {
    //const classes = useStyles();
    const [anho, setAnho] = useState('')
    const [periodo, setPeriod] = useState('')
    const [ciclos, setCiclos] = useState([])

    const handleClick=(e) => {
        e.preventDefault()
        const ciclo = {anho, periodo}
        console.log(ciclo)
        addCiclo(ciclo)
          .then((newCiclo) => {
          setCiclos(prevCiclos => prevCiclos.concat(newCiclo));
          console.log("Nuevo Ciclo Agregado")
        })
    }

    useEffect(() => {

      getAllCiclos()
        .then((ciclos) => {
          setCiclos(ciclos);
        })

    }, [])
    return(
        <Paper>
            <h1 style={{margin:"30px",alignContent:"center"}}>Sistemas de Gestión Docente</h1>
            <div>
                    <h3 style = {{paddingLeft:"40px"}}>
                        Agregar un Nuevo Ciclo
                    </h3>
                </div>
            
            <Stack style = {{padding:"20px"}} spacing={2} direction="row">
                <TextField id="outlined-basic" label="Año" variant="outlined" value = {anho} onChange = {(e)=>setAnho(e.target.value)}/>
                <TextField id="outlined-basic" label="Periodo" variant="outlined" value = {periodo} onChange = {(e)=>setPeriod(e.target.value)}/>
                <Button variant = "contained" onClick = {handleClick}>Agregar Ciclo</Button>
                <Button variant="outlined">Cancelar</Button>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={ciclos}
                    getOptionsLabel = {(option) => "option.anho - option.periodo"}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Ciclo" />}
                    />
            </Stack>
            
            <h2 style = {{paddingLeft:"20px"}}>Ciclos Registrados:</h2>
            {ciclos.map(ciclo=> (
                <Paper  style = {{paddingLeft:"40px"}} elevation={6} key={ciclo.id}>
                    ID: {ciclo.id}<br/>
                    Ano:{ciclo.anho}<br/>
                    Periodo:{ciclo.periodo} <Button variant="outlined">Eliminar Ciclo</Button>
                </Paper>
                
            ))}   
        </Paper>

    )

}
