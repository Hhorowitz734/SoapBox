//Component which controls a part of the trending column
import {AiOutlineHeart} from "react-icons/ai"


//ARTICLE OBJECT CONTROL
function Article({position, article}){
    return (
        <div className="grid grid-cols-11 w-full h-14 hover:bg-gray-200 items-center cursor-pointer">
            <div className="col-span-1">
                <h1 className="text-2xl">{position}</h1>
            </div>
            <div className="col-span-10 flex">
                <h1 className="text-xl text-left">{article.title}</h1>
                <h1 className="mx-1 font-bold">&middot;</h1>
                <h1 className="mx-1 text-lg">{article.author}</h1>
            </div>
        </div>
    );
}

function Articles({trendObjects}) {
    const articleComponents = trendObjects.map((article, index) => (
      <Article key={index} position={index + 1} article={article} />
    ));
  
    return (
      <div className="border border-t-transparent border-l-transparent border-r-transparent overflow-y-scroll h-fit max-h-[33vh]">
        <h1 className="text-center text-xl font-bold ">Trending Articles</h1>
        {articleComponents}
      </div>
    );
  }

  export function Tag({ tagObject }) {
    const normalOpacity = "0.25)";
    const hoverOpacity = "0.4)";
  
    const handleMouseEnter = (e) => {
      e.target.style.backgroundColor = `${tagObject.color}${hoverOpacity}`;
    };
  
    const handleMouseLeave = (e) => {
      e.target.style.backgroundColor = `${tagObject.color}${normalOpacity}`;
    };

  
    return (
      <div>
        <h1
        className="w-fit m-1 px-1 border border-transparent rounded-lg cursor-pointer"
        style = {{backgroundColor: `${tagObject.color}${normalOpacity}`}}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >{tagObject.tag}</h1>
      </div>
    );
  }
  
  
  function Tags({ trendObjects }) {
    return (
      <div className="overflow-y-scroll h-fit max-h-[25vh]">
        <h1 className="text-center text-xl font-bold">Trending Tags</h1>
        <div className="flex flex-wrap">
            {trendObjects.map((tag) => (
            <Tag tagObject={tag} key={tag.tag} />
            ))}
        </div>
      </div>
    );
  }

  function User({trendObject, position}) {
    return (
        <div className="grid grid-cols-11 w-full h-14 hover:bg-gray-200 items-center cursor-pointer">
            <div className="col-span-1">
                <h1 className="text-2xl">{position}</h1>
            </div>
            <div className="col-span-10 flex">
            <img src={trendObject.img} alt="Your image" className="h-8 mr-1 rounded-full" style={{ borderRadius: "50%" }} />
                <h1 className="text-xl text-left">{trendObject.name}</h1>
                <h1 className="mx-1 font-bold">&middot;</h1>
                <h1 className="mx-1 text-lg">{trendObject.score}</h1>
                <AiOutlineHeart className="mt-2"/>

            </div>
        </div>
    );
  }

  function Users({trendObjects}) {
    return (
    <div className="mt-2 border border-b-transparent border-l-transparent border-r-transparent overflow-y-scroll h-fit max-h-[33vh]">
        <h1 className="text-center text-xl font-bold">Trending Users</h1>
        {trendObjects.map((user, index) => (
            
            <User trendObject={user} position={index + 1} />
            ))}
    </div>
    );
  }
  
  

function Trend({articleObjects, tagObjects, userObjects}){
    return (
        <div className="h-1/4 w-full">
            <Articles trendObjects = {articleObjects} />
            <Tags trendObjects={tagObjects} />
            <Users trendObjects={userObjects} />   
        </div>
    )
}

export default Trend;