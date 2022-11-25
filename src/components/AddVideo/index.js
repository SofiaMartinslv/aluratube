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

export default function AddVideo(props) {
  const addVideoForm = useForm({
    initialValues: { title: "", url: "", playlist: "" },
  });
  const [showModal, setShowModal] = React.useState(false);
  const [showAddPlaylist, setShowAddPlaylist] = React.useState(false);
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
                  addVideoForm.values.playlist
                );
                setShowModal(false);
                addVideoForm.clearForm();
              }}
            >
              <input
                className="input w-full"
                placeholder="Video title"
                name="title"
                value={addVideoForm.values.title}
                onChange={addVideoForm.handleChange}
              />
              <input
                className="input w-full"
                placeholder="URL"
                name="url"
                value={addVideoForm.values.url}
                onChange={addVideoForm.handleChange}
              />
              {!showAddPlaylist && (
                <>
                  <label className="label pb-0">
                    <span className="label-text">Playlist</span>
                  </label>
                  <div className="flex w-full">
                    <select
                      className="select select-bordered flex-auto"
                      name="playlist"
                      value={addVideoForm.values.playlist}
                      onChange={addVideoForm.handleChange}
                    >
                      {props.playlists.length > 1 &&
                        props.playlists.map((playlist) => {
                          return (
                            <option value={playlist.id} key={playlist.id}>
                              {playlist.name}
                            </option>
                          );
                        })}
                    </select>
                    <button
                      type="button"
                      onClick={() => {
                        setShowAddPlaylist(true);
                      }}
                      className="w-14 ml-2 red-button btn tooltip tooltip-left"
                      data-tip="Add playlist"
                    >
                      +
                    </button>
                  </div>
                </>
              )}
              {showAddPlaylist && (
                <>
                  <label className="label pb-0">
                    <span className="label-text">Add playlist</span>
                  </label>
                  <div className="flex">
                    <input
                      className="input w-full"
                      placeholder="Playlist"
                      name="playlist"
                    />
                    <div className="flex">
                      <button
                        type="button"
                        onClick={() => {
                          setShowAddPlaylist(false);
                        }}
                        className="w-14 ml-2 red-button btn"
                      >
                        X
                      </button>
                      <button
                        type="button"
                        className="w-14 ml-2 red-button btn"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </>
              )}
              <label className="label pb-0">
                <span className="label-text">Thumbnail</span>
              </label>
              <img src={getThumbUrl(addVideoForm.values.url)}></img>
              <button type="submit" className="red-button w-full btn btn-sm">
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
