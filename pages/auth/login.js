/* eslint-disable quote-props */
import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography
} from '@material-ui/core'
import React, { useState } from 'react'
import { FacebookIcon, GoogleIcon } from '../../src/icons/index'
import { fbAuth } from '../../src/services/firebaseConfig'
import { useRouter } from 'next/router'
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}))

const LoginView = () => {
  const [account, setAccount] = useState({
    'email': '',
    'password': ''
  })
  const classes = useStyles()
  const router = useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target
    const tmp = { ...account }
    tmp[name] = value
    setAccount(tmp)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    fbAuth.signInWithEmailAndPassword(account.email, account.password).catch((err) => {
      if (err) {
        window.alert(err)
        return
      }
    })
    router.push('/')
  }
  return (
    <div className={classes.root}>
      <Box className="absolute top-1/2 left-1/2" style={{ transform: 'translate(-50%, -50%)' }}>
        <Container maxWidth="sm" className="border border-solid border-opacity-25 rounded" style={{ width: '500px' }}>
          <form onSubmit={handleSubmit}>
            <Box mb={3}>
              <Typography color="textPrimary" textAlign="center" fontSize="24px" fontWeight='500'>
                Đăng nhập
              </Typography>
            </Box>
            <Grid container spacing={3} >
              <Grid item xs={12} md={12} className="flex justify-center" >
                <Button startIcon={<GoogleIcon />} onClick={handleSubmit} size="large" className="border border-solid rounded lg:w-8/12 xl:w-8/12" color="default">
                  Đăng nhập bằng Google Mail
                </Button>
              </Grid>
              <Grid item xs={12} md={12} className="flex justify-center" >
                <Button startIcon={<FacebookIcon />} onClick={handleSubmit} size="large" variant="contained" className="lg:w-8/12 xl:w-8/12" >
                  Đăng nhập bằng Facebook
                </Button>
              </Grid>
            </Grid>
            <Box mt={1.5} mb={1} >
              <Typography align="center" variant="body1" fontSize="14px">
                Hoặc
              </Typography>
              <div className="w-full h-px bg-black opacity-60"></div>
            </Box>
            <Box mt={3}>
              <TextField
                // error={Boolean(touched.email && errors.email)}
                className="w-9/12 flex mx-auto"
                // helperText={touched.email && errors.email}
                label="Email"
                margin="normal"
                name="email"
                // onBlur={handleBlur}
                // onChange={handleChange}
                type="email"
                // value={values.email}
                variant="outlined"
                onChange={handleChange}
              />
              <TextField
                // error={Boolean(touched.password && errors.password)}
                className="w-9/12 flex mx-auto"
                // helperText={touched.password && errors.password}
                label="Mật khẩu"
                margin="normal"
                name="password"
                // onBlur={handleBlur}
                // onChange={handleChange}
                type="password"
                // value={values.password}
                variant="outlined"
                onChange={handleChange}
              />
            </Box>
            <Box mt={2}>
              <Button
                color="primary"
                // disabled={isSubmitting}
                className="w-9/12 flex mx-auto rounded-2xl"
                size="large"
                type="submit"
                variant="contained"
              >
                Đăng nhập
              </Button>
              <Typography
                variant="body1"
                className="pl-16 mt-2"
                fontWeight="600"
              >
                Quên mật khẩu?
              </Typography>
            </Box>
            <Box mb={1} >
              <Typography align="center" variant="body1" fontSize="14px">
                Hoặc
              </Typography>
              <div className="w-full h-px bg-black opacity-60"></div>
            </Box>
            <Box my={2}>
              <Button
                color="primary"
                // disabled={isSubmitting}
                className="w-9/12 flex mx-auto rounded-2xl"
                size="large"
                type="submit"
                variant="contained"
              >
                Là khách hàng mới của chúng tôi
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </div>
  )
}

export default LoginView