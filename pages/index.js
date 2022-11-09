import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    const estilosDaHomePage = { 
        //backgroundColor: 'red'
    };

const valorDoFiltro = "Angular";


    return (
        <>
            <CSSReset />
            <div style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                }}>


                <Menu />
                <Header />
                <Timeline searchValue={valorDoFiltro} playLists={config.playLists}>
                    conteudo
                </Timeline>
            </div>
        </>
    );
  }
  
  export default HomePage


/*   function Menu(){
    return (
        <div>
            Menu
        </div>
    )
  } */


  const StyledHeader = styled.div`
        img { 
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }
        .user-info {
            margin-top: 50px;
            display: flex;
            align-items: center;
            width: 100%;
            padding: 16px 32px;
            gap: 16px;
        }
  `;
  function Header(){
    return (
        <StyledHeader>
           {/* <img src="banner" /> */}

            <action className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>

                    <p>
                    {   config.job}
                    </p>
                </div>
                
            </action>
            
        </StyledHeader>
    )
  }

  function Timeline({searchValue,...props}){
    
    const playListNames = Object.keys(props.playLists);

    // Statement
    // Retorno por expressão

    return (
        <StyledTimeline>
            {playListNames.map((playListName)=>{
                const videos = props.playLists[playListName];
                return (
                    <section>
                      <h2>{playListName}</h2>
                        <div>
                         {videos.filter((video)=>{
                            return video.title.includes(searchValue)
                         }).map((video)=> {
                    return (
                      <a href={video.url}>
                         <img src={video.thumb}/>
                         <span>
                            {video.title}
                         </span>
                      </a>
                    )
              })}
                   </div>
                    </section>
                )
             })}
        </StyledTimeline>
    )
  }