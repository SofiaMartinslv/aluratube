import React from "react";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
  const homePageStyle = {};
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <>
      <div style={homePageStyle}>
        <Menu searchValue={searchValue} setSearchValue={setSearchValue} />
        <Header />
        <Timeline
          searchValue={searchValue}
          playlists={config.playlists}
        ></Timeline>
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
  const playlistsNames = Object.keys(props.playlists);

  return (
    <StyledTimeline>
      {playlistsNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const [normalizedTitle, normalizedSearchValue] = [
                    video.title.toLowerCase(),
                    searchValue.toLowerCase(),
                  ];
                  return normalizedTitle.includes(normalizedSearchValue);
                })
                .map((video) => {
                  return (
                    <a key={video.key} href={video.url}>
                      <img src={video.thumb} />
                      <span>{video.title}</span>
                    </a>
                  );
                })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
