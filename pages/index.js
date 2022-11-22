import React from "react";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { videoService } from "../src/services/videosService";

function HomePage() {
  const service = videoService();
  const [searchValue, setSearchValue] = React.useState("");
  const [playlists, setPlaylists] = React.useState([]);
  const [videos, setVideos] = React.useState([]);

  React.useEffect(() => {
    service.getPlaylists().then((res) => setPlaylists(res.data));
    service.getVideos().then((res) => setVideos(res.data));
  }, []);

  return (
    <>
      <div>
        <Menu searchValue={searchValue} setSearchValue={setSearchValue} />
        <Header />
        {/* <Timeline searchValue={searchValue} playlists={playlists} videos={videos}></Timeline> */}
        <Timeline></Timeline>
      </div>
    </>
  );
}

export default HomePage;

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};
  .banner img {
    width: 100%;
    height: 230px;
    object-fit: cover;
  }
  .user-info img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <section className="banner">
        <img src={config.banner} />
      </section>
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline({ searchValue, ...props }) {
  return (
    <StyledTimeline>
      {/* {props.playlists.length > 1 &&
        props.playlists.map((playlist) => {
          return (
            <section key={playlist.id}>
              <h2>{playlist.name}</h2>
              <div>
                {props.videos.filter((video) => video.playlist === playlist.id)
                  .filter((video) => {
                    const [normalizedTitle, normalizedSearchValue] = [
                      video.title.toLowerCase(),
                      searchValue.toLowerCase(),
                    ];
                    return normalizedTitle.includes(normalizedSearchValue);
                  })
                  .map((video) => {
                    return (
                      <a key={video.id} href={video.url}>
                        <img src={video.thumb} />
                        <span>{video.title}</span>
                      </a>
                    );
                  })}
              </div>
            </section>
          );
        })} */}
    </StyledTimeline>
  );
}
