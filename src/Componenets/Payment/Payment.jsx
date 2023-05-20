import React from 'react';
import './Payment.css'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { CARD } from '../../Redux/Action/action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const validationSchema = yup.object().shape({
    cardNumber: yup
      .string()
      .required('Card Number is required')
      .min(16, 'Card Number must be 16 digits')
      .max(16, 'Card Number must be 16 digits'),
    cardholderName: yup.string().required('Cardholder Name is required'),
    expirationDate: yup.string().required('Expiration Date is required'),
    cvv: yup
      .string()
      .required('CVV is required')
      .min(3, 'CVV must be 3 digits')
      .max(3, 'CVV must be 3 digits'),
  });
  
  const useStyles = makeStyles((theme) => ({
    form: {
      maxWidth: '300px',
      margin: '0 auto',
      padding: '10px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      background: '#fff',
    },
    input: {
      marginBottom: theme.spacing(1),
    },
    button: {
      background: '#4caf50',
      color: '#fff',
      marginTop: theme.spacing(1),
      '&:hover': {
        background: '#45a049',
      },
    },
    error: {
      color: 'red',
      marginTop: theme.spacing(2),
    },
  }));

  const Payment = () => {
    const Navigate=useNavigate()
    const dispatch=useDispatch()
    const payments_details=useSelector((state)=>state.cartreducer.payments_details)
    // const array= [payments_details]
    // console.log("sdsdsddsadsada",array);
    const classes = useStyles();
    console.log("payment_deatils",payments_details);
  
     const formik = useFormik({
    initialValues: {
      cardNumber: '',
      cardholderName: '',
      expirationDate: '',
      cvv: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values);
      dispatch(CARD(values))
      toast.success('Paymenty successfull!', {
        autoClose: 3000,
      });
      setTimeout(() => {
        Navigate('/')
      }, 3500);
     
    },
  });

  return (
    <>
    <div className="main">
    <div className="atm-card">
      <img src='./a.png' alt="Outer Card..................................." className="outer-card"  style={{borderRadius:12}}/>
      
      <img src="./a.png"alt="Inner Card" className="inner-card" style={{borderRadius:12}} />
    </div>
    <form className={classes.form} onSubmit={formik.handleSubmit}>
      <TextField
        className={classes.input}
        label="Card Number"
        variant="outlined"
        fullWidth
        name="cardNumber"
        value={formik.values.cardNumber}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.cardNumber && formik.errors.cardNumber}
        helperText={formik.touched.cardNumber && formik.errors.cardNumber}
      />
      <TextField
        className={classes.input}
        label="Cardholder Name"
        variant="outlined"
        fullWidth
        name="cardholderName"
        value={formik.values.cardholderName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.cardholderName && formik.errors.cardholderName}
        helperText={formik.touched.cardholderName && formik.errors.cardholderName}
      />
      <TextField
        className={classes.input}
        label="Expiration Date"
        variant="outlined"
        fullWidth
        name="expirationDate"
        value={formik.values.expirationDate}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.expirationDate && formik.errors.expirationDate}
       />
        <TextField
        className={classes.input}
        label="CVV"
        variant="outlined"
        fullWidth
        name="cvv"
        value={formik.values.cvv}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        helperText={formik.touched.cvv && formik.errors.cvv}
        error={formik.touched.cvv && formik.errors.cvv}
      />
      <Button
        className={classes.button}
        variant="contained"
        type="submit"
        fullWidth
      >
        Submit
      </Button>
    </form>
    <ToastContainer  />
    </div>
    {
      [payments_details].map((e,index)=>{
        console.log("esaeaesaea",e);
        return(
          <>
  <div>
      <ul>
        <li>{e.cardNumber}</li>
        <li>{e.cardholderName}</li>
        <li>{e.expirationDate}</li>
        <li>{e.cvv}</li>

      </ul>
    </div>
          </>

        )
        }
    )}
    
    </>
  );
};

export default Payment;
