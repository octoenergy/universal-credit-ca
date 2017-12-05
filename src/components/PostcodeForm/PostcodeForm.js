import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import ReduxFormValidate from  '../ReduxFormValidate/ReduxFormValidate';
import { renderField } from '../Form/renderField';

const postcodeValidatorRedux = (value) => (value) ? undefined : "Please enter a valid postcode";

function validate (values) {
    const errors = {
        postcode: postcodeValidatorRedux(values.postcode)
    };
    return errors;
}

class PostcodeForm extends Component {

    constructor(props) {
        super(props);
    }

    componentWillUpdate(newProps) {
        if (!this.props.submitSucceeded && newProps.submitSucceeded) {
            this.context.router.push(`/find/${this.props.postcode}`);
            this.props.reset();
        }
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Field
                    name="postcode"
                    type="text"
                    component={renderField}
                    label="Enter a postcode"
                    validate={postcodeValidatorRedux}
                />
                <button type="submit">Go</button>
            </form>
        );
    }
}

PostcodeForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    submitSucceeded: PropTypes.bool.isRequired,
    postcode: PropTypes.string,
    reset: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

PostcodeForm.contextTypes = {
    router: PropTypes.object.isRequired
};

const POSTCODE_FORM_NAME = 'POSTCODE_FORM_NAME';
const postcodeFormValueSelector = formValueSelector(POSTCODE_FORM_NAME);

const PostcodeFormWrapped = ReduxFormValidate(reduxForm({
    form: POSTCODE_FORM_NAME,
    destroyOnUnmount: true,
    validate,
})(PostcodeForm));

// Requesting something from the state
const PostcodeFormWrappedConnected = connect(
    (state) => ({
        postcode: postcodeFormValueSelector(state, 'postcode')
    })
)(PostcodeFormWrapped);

export default PostcodeFormWrappedConnected;
