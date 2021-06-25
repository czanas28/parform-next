import { useRouter } from 'next/router';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../../components/FormFields/Input';
import Button from '../../components/FormFields/Button';
import dummyData from '../../dummydata/dummydata';

const ParForm = (props) => {

    const router = useRouter();

    const { parform } = router.query;

    const initialValues = {};
    const inputArray = [];
    const validation = {};

    props.formInfo.forEach(input => {
        if (input.associatedAction.includes(parform)) {
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
            onSubmit={async (values) => {
                const response = await fetch('/api/post',
                    {
                        method: 'POST',
                        body: JSON.stringify({
                            values: values,
                            parform: parform,
                        }),
                        header: {
                            'Content-Type': 'application/json'
                        }
                    });
                const data = await response.json();
            }}
            validationSchema={Yup.object({ ...validation })}
        >
            <Form>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col">
                            <h1>{parform}</h1>
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

export const getStaticPaths = async () => {

    const getAllFormIds = () => {
        const formPages = dummyData.requestedActionOptions;

        return formPages.map(form => {
            return {
                params: {
                    parform: form,
                },
            }
        })
    }

    const paths = getAllFormIds();
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    return {
        props: {
            formInfo: dummyData.positionInformation,
        }
    }
}

export default ParForm;