import React from "react"
import config from "../config.json"
import styled from "styled-components"
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
     const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    return (
        <>
            
            <div style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                }}>

                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
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
        background-color: ${({theme})=> theme.backgroundLevel1 } ;

        img { 
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

 const StyledBanner = styled.div`
    /* background-image: url(${config.banner}) ; */
    background-image: url(${({bg}) =>bg }}) ;
    height: 230px;
 `;       

  function Header(){
    return (
        <StyledHeader>
           <StyledBanner bg={config.banner}/>

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
                    <section key={playListName}>
                      <h2>{playListName}</h2>
                        <div>
                         {videos
                         .filter((video)=>{
                            const titleNormalized = video.title.toLowerCase();
                            const searchValueNormalized = searchValue.toLowerCase();
                            return titleNormalized.includes(searchValueNormalized)
                         })
                         .map((video)=> {
                            return (
                            <a key={video.url} href={video.url}>
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