import React from "react";
import { StyledAddVideo } from "./styles";

function useForm(props) {
  const [values, setValues] = React.useState(props.initialValues);
  return {
    values,
    handleChange: (e) => {
      const value = e.target.value;
      const name = e.target.name;
      console.log(value);
      setValues({
        ...values,
        [name]: value,
      });
    },
  };
}

export default function AddVideo() {
  const addVideoForm = useForm({ initialValues: { title: "", url: "" } });
  return (
    <StyledAddVideo>
      <label htmlFor="my-modal" className="add-video btn">
        +
      </label>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <label htmlFor="my-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div className="modal-action">
            <label htmlFor="my-modal" className="close-modal">
              x
            </label>
          </div>
          <form
            className="flex flex-col gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              console.log(addVideoForm.values);
            }}
          >
            <input
              placeholder="Video title"
              name="title"
              value={addVideoForm.values.title}
              onChange={addVideoForm.handleChange}
              className="input input-bordered input-sm w-full"
            />
            <input
              placeholder="URL"
              name="url"
              value={addVideoForm.values.url}
              onChange={addVideoForm.handleChange}
              className="input input-bordered input-sm w-full"
            />
            <button type="submit" className="w-full btn btn-sm">
              Add
            </button>
          </form>
        </label>
      </label>
    </StyledAddVideo>
  );
}
