import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import * as Yup from 'yup';
import Services from "../../services/services";
import './search-character.scss'

const SearchFormik = () => {
    const [state, setState] = useState(null);
    const services = new Services();
    const formCharacter = () => {
        return (
            <>
                {state.length > 0 ?
                    <div className="formCharacter">
                        <h2>{state[0].name}</h2>
                        <NavLink to={`/FormItem/${state[0].id}`}><button>btn</button></NavLink>
                    </div> : <div>There is not such character</div>
                }
            </>
        )
    }
    return (
        <Formik
            initialValues={{
                name: ''
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(2, 'минимум 2 символа')
                    .required('Обязательное поля')
            })}
            onSubmit={({ name }, {resetForm}) => {
                services.getSearchCharacter(name).then(data => setState(data.data.results))
                resetForm({name: ''})
            }}
        >
            <Form className="form">
                <label>Or find a character by name</label>
                <Field type="text" name="name" />
                <button type="submit">search</button>
                {<ErrorMessage className="error" name="name" component="div" />}
                {state ? formCharacter() : null}
            </Form>

        </Formik>
    )
}
export default SearchFormik;