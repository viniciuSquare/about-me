import { StyledVideoNoteTaking } from "./styled";

export function VideoNoteTaking() {
  return (
    <StyledVideoNoteTaking>
      <div className="App" style={{ height: 500 }}>
        <h1>React video player</h1>
        <ReactVideo
          src="https://player.vimeo.com/external/527751333.hd.mp4? s=6c0db75ad52213d37e122ed4038c6150997e870e&profile_id=172&oauth2_t oken_id=57447761"
          autoPlay
          primaryColor="blue"
          poster="https://images.pexels.com/photos/7422113/pexels- photo-7422113.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
      </div>
    </StyledVideoNoteTaking>
  );
}
