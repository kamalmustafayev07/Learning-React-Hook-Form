import './App.scss'
import {SubmitHandler, useForm} from 'react-hook-form'

interface IForm{
  'e-mail':string;
  'message':string;
}

function App() {
  const {register,handleSubmit,formState} = useForm<IForm>({mode:'onChange',});

  const emailError=formState.errors['e-mail']?.message;

  const onSubmit:SubmitHandler<IForm> = (data:any) =>{
    console.log(data);
  }

  return (
    <>
    <h1>Feedback Form</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder='Enter e-mail:' {...register('e-mail',{required:'This field is required',pattern:{
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message:'Invalid e-mail address',
      },})}/>
      {emailError && <p style={{color:'tomato',fontSize:12,margin:'2px auto 0px',textAlign:'left'}}></p>}
      <textarea placeholder='Enter message:'></textarea>
      <button type='submit'>Send</button>
    </form>
    </>
  )
}

export default App
