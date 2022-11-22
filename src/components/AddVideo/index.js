import React from "react";
import { videoService } from "../../services/videosService";
import { StyledAddVideo } from "./styles";

function useForm(props) {
  const [values, setValues] = React.useState(props.initialValues);
  return {
    values,
    handleChange: (e) => {
      const value = e.target.value;
      const name = e.target.name;
      setValues({
        ...values,
        [name]: value,
      });
    },
    clearForm() {
      setValues({});
    },
  };
}

export default function AddVideo() {
  const addVideoForm = useForm({
    initialValues: { title: "", url: "" },
  });
  const [showModal, setShowModal] = React.useState(false);
  const getThumbUrl = function (videoUrl) {
    if (videoUrl) {
      const filter = videoUrl.match("[\\?&]v=([^&#]*)");
      const video = filter && filter[1];
      return "http://img.youtube.com/vi/" + video + "/0.jpg";
    }
  };

  return (
    <StyledAddVideo>
      <button
        className="add-video btn"
        onClick={() => setShowModal(!showModal)}
      >
        +
      </button>
      {showModal && (
        <div className="modal visible opacity-100 pointer-events-auto">
          <div className="modal-box relative">
            <div className="modal-action">
              <button
                type="button"
                className="close-modal"
                onClick={() => setShowModal(!showModal)}
              >
                x
              </button>
            </div>
            <form
              className="flex flex-col gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                const thumbUrl = getThumbUrl(addVideoForm.values.url);
                videoService().addVideo(
                  addVideoForm.values.title,
                  addVideoForm.values.url,
                  thumbUrl,
                  1
                );
                // .then((res) => console.log(res))
                // .catch((err) => {
                //   console.log(err);
                // });
                // supabase
                //   .from("video")
                //   .insert({
                //     title: addVideoForm.values.title,
                //     url: addVideoForm.values.url,
                //     thumb: thumbUrl,
                //     playlist: 1,
                //   })
                // .then((res) => console.log(res))
                // .catch((err) => {
                //   console.log(err);
                // });
                setShowModal(false);
                addVideoForm.clearForm();
              }}
            >
              <input
                placeholder="Video title"
                name="title"
                value={addVideoForm.values.title}
                onChange={addVideoForm.handleChange}
              />
              <input
                placeholder="URL"
                name="url"
                value={addVideoForm.values.url}
                onChange={addVideoForm.handleChange}
              />
              <label className="label pb-0">
                <span className="label-text">
                  Playlist
                </span>
              </label>
              <select className="select select-bordered">
                <option disabled selected>
                  Playlist
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
              <label className="label pb-0">
                <span className="label-text">
                  Thumbnail
                </span>
              </label>
              <img src={getThumbUrl(addVideoForm.values.url)}></img>
              <button type="submit" className="w-full btn btn-sm">
                Add
              </button>
            </form>
          </div>
          <label
            onClick={() => setShowModal(!showModal)}
            htmlFor="my-modal-4"
            className="modal z-[-99] visible opacity-100 cursor-pointer pointer-events-auto"
          ></label>
        </div>
      )}
    </StyledAddVideo>
  );
}
