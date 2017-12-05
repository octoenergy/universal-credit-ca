import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import ReduxFormValidate from  '../ReduxFormValidate/ReduxFormValidate';
import postcodeValidator from '../../utils/postcodeValidator';

function validate (values) {
    const errors = {
        postcode: postcodeValidator(values.postcode)
    }
    return errors;
}

class PostcodeForm extends Component {

    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this);
    }

    submit(formValues) {
        return this.props.submitForm(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.submit)}>
                <Field
                    name="postcode"
                    type="text"
                    component="input"
                    placeholder="Enter a postcode"
                />
                <button type="submit">Go</button>
            </form>
        )
    }
}

PostcodeForm.propTypes = {
    submitForm: PropTypes.func.isRequired
}

PostcodeForm.contextTypes = {
    router: PropTypes.object.isRequired
}

const POSTCODE_FORM_NAME = 'POSTCODE_FORM_NAME'

const PostcodeFormWrapped = ReduxFormValidate(reduxForm({
    form: POSTCODE_FORM_NAME,
    destroyOnUnmount: false,
    validate,
})(PostcodeForm))

const PostcodeFormWrappedConnected = connect()(PostcodeFormWrapped)

export default PostcodeFormWrappedConnected