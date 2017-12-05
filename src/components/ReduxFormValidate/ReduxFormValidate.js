import React from "react";

const onSubmissionError = (errors) => {
    for (const field in errors) {
        if (errors.hasOwnProperty(field) && errors[field]) {
            const errorEl = document.querySelector(`[name="${field}"]`)
            if (errorEl) { // npe
                if (errorEl.type === "hidden") { // can't focus on hidden element
                    document.getElementById(errorEl.getAttribute('data-scroll-to')).focus()
                }
                else if (errorEl.focus) {
                    errorEl.focus(); // this scrolls without visible scroll
                }

            }
        }
    }
}


// This function takes a component...
const ReduxFormValidate = (WrappedComponent) =>
  // ...and returns another component...
     class extends React.Component {

         render() {
             return <WrappedComponent
                 onSubmitFail = {onSubmissionError}
                 {...this.props}
          />;
         }
  }

export default ReduxFormValidate;