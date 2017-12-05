import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import ReduxFormValidate from  '../ReduxFormValidate/ReduxFormValidate';
import postcodeValidator from '../../utils/postcodeValidator';

function validate (values) {
    const errors = {
        postcode: postcodeValidator(values.postcode)
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
                    component="input"
                    placeholder="Enter a postcode"
                />
                <button type="submit">Go</button>
            </form>
        );
    }
}

PostcodeForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

PostcodeForm.contextTypes = {
    router: PropTypes.object.isRequired
};

const POSTCODE_FORM_NAME = 'POSTCODE_FORM_NAME';
const postcodeFormValueSelector = formValueSelector(POSTCODE_FORM_NAME);

const PostcodeFormWrapped = ReduxFormValidate(reduxForm({
    form: POSTCODE_FORM_NAME,
    destroyOnUnmount: true,
})(PostcodeForm));

// Requesting something from the state
const PostcodeFormWrappedConnected = connect(
    (state) => ({
        postcode: postcodeFormValueSelector(state, 'postcode')
    })
)(PostcodeFormWrapped);

export default PostcodeFormWrappedConnected;
