import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username is Required';
    }

    if (!values.remarks) {
      errors.remarks = 'Remark is Required';
    }

    return errors;
  };

  export default function CommentForm({ addNewComment }) {

    const formik = useFormik({
      initialValues: {
        username: '',
        remarks: '',
        rating: 5,
      },
      validate,
      onSubmit: (values, { resetForm }) => {
        // Add new comment
        addNewComment(values);
        // Reset form fields
        resetForm();
      },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" onChange={formik.handleChange} value={formik.values.username}/>
                {formik.errors.username ? <p style={{color:"red"}}>{formik.errors.username}</p> : null}
                <br />
                <br />

                <label htmlFor="remarks">Remarks:</label>
                <textarea name="remarks" id="remarks" placeholder="Leave a Remark"  onChange={formik.handleChange} value={formik.values.remarks}/>
                {formik.errors.remarks ? <p style={{color:"red"}}>{formik.errors.remarks}</p> : null}
                <br />
                <br />

                <label htmlFor="rating">Rating:</label>
                <input type="number" name="rating" id="rating" min={1} max={5}  onChange={formik.handleChange} value={formik.values.rating}/>
                <br />
                <br />

                <button type="submit">Add Comment</button>
            </form>
        </div>
    )
}