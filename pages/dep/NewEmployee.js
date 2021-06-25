import { useRouter } from 'next/router';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../../components/FormFields/Input';
import Button from '../../components/FormFields/Button';
import dummyData from '../../dummydata/dummydata';

const NewEmployee = () => {

    const router = useRouter();

    const initialValues = {};
    const inputArray = []
    let action = router.pathname.split("/");
    action = action[1];
    const validation = {}
    dummyData.positionInformation.forEach(input => {
        if (input.associatedAction.includes(action)) {
            initialValues[input.name] = input.initialValue;
            inputArray.push(input);
            if (input.type === "text") {
                validation[input.name] = Yup.string();
            }
            if (input.type === "date") {
                validation[input.name] = Yup.date('Invalid Date');
            }
            if (input.type === "email") {
                validation[input.name] = Yup.string().email('Invalid Email Address');
            }
        }
    });

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                }, 500)
                setSubmitting(false)
            }}
            validationSchema={Yup.object({...validation})}
        >
            <Form>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col">
                            <h1>New Employee</h1>
                            <hr />
                        </div>
                    </div>
                    <div>
                        <div className="row">
                            {inputArray.map(input => {
                                return <div key={input.id} className="col-md-3"><Input id={input.name} name={input.name} label={input.label} type={input.type} /></div>;
                            })}
                        </div>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-md-12">
                                <Button type="submit" label="Submit" className="btn btn-outline-dark mt-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </Formik>

    )
}

export default NewEmployee;