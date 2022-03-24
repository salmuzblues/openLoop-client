import { useState } from 'react';
import { useForm } from "react-hook-form";

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    firstName: yup
        .string()
        .required('First Name is required'),
    lastName: yup
        .string()
        .required('Last Name is required'),
    email: yup
        .string()
        .email('Email must be a valid email')
        .required('Email is required'),
    note: yup
        .string()
        .required('Note is required'),
  }).required();
  

function Home() {
    const [dataForm, setDataForm] = useState(null);

    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange"
      });

    const onSubmit = (data) => {
        console.log(errors);

        console.log('data ', data );
        setDataForm(JSON.stringify(data));
      };

    return(
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Box pt={4} pb={5}>
                        <Box mb={3}>
                            <TextField 
                                id="outlined-basic" 
                                fullWidth 
                                label="First Name" 
                                error={errors.firstName && true }
                                variant="outlined" 
                                mb={3} 
                                helperText={errors.firstName && errors.firstName.message}
                                autoFocus
                                {...register("firstName")}
                            />

                        </Box>
                        <Box mb={3}>
                            <TextField 
                                id="outlined-basic" 
                                fullWidth 
                                label="Last Name" 
                                variant="outlined" 
                                error={errors.lastName && true }
                                mb={3} 
                                helperText={errors.lastName && errors.lastName.message}
                                {...register("lastName")}
                            />

                        </Box>
                        <Box mb={3}>
                            <TextField 
                                id="outlined-basic" 
                                fullWidth 
                                label="Email" 
                                variant="outlined" 
                                error={errors.email && true }
                                mb={3} 
                                helperText={errors.email && errors.email.message}
                                {...register("email")}
                            />

                        </Box>
                        <Box mb={3}>
                            <TextField 
                                id="outlined-basic" 
                                fullWidth 
                                label="Note" 
                                variant="outlined" 
                                error={errors.note && true }
                                mb={3} 
                                helperText={errors.note && errors.note.message}
                                {...register("note")}
                            />

                        </Box>
                        <Button 
                            onClick={handleSubmit(onSubmit)} 
                            variant="contained"
                            disabled={!isValid}
                        >
                            Add user
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;