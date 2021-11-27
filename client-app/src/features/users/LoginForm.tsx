import { ErrorMessage, Formik } from "formik";
import { observer } from "mobx-react-lite";
import { Button, Form, Header, Label } from "semantic-ui-react";
import MyTextInput from '../../app/common/form/MyTextInput';
import { useStore } from "../../app/stores/store";

export default observer(function LoginForm() {
    const {userStore} = useStore();
    return (
        <Formik
               initialValues={{email: '', password: '', error: null}}
               onSubmit={(values, {setErrors}) => userStore.login(values).catch(error =>
                setErrors({error: 'Invalid email or password'}))}     
                >
        {({handleSubmit, isSubmitting, errors}) => (
        <Form className='ui form' onSubmit={handleSubmit}   autoComplete='off' >
            <Header as='h2' content='Login to Reactivities' color='purple' textAlign= 'center' />
        <MyTextInput name='email' placeholder='Email'/>
       <MyTextInput name='password' placeholder='Password' type='password'/>
       <div className="flex items-center">
          <input  name="remeber"
          type="checkbox" className="h-4 w-4 text-blue-300 rounded"/>
         <label htmlFor="" className="ml-2 text-sm text-gray-600">Rememeber me</label>
         </div>
         <ErrorMessage
         name='error' render={() => 
          <Label style={{marginBottom: 10}} basic color='red' content={errors.error} />}
         />
         <Button  loading={isSubmitting} positive content='Login' type='submit' fluid />
     </Form>
     )}
  </Formik>
)})