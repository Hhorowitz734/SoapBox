//Component which controls a part of the trending column

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
      <div>
        <h1 className="text-center text-xl font-bold">Trending Articles</h1>
        {articleComponents}
      </div>
    );
  }

  function Tag({ tagObject }) {
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
      <div>
        <h1 className="text-center text-xl font-bold">Trending Tags</h1>
        <div className="flex flex-wrap">
            {trendObjects.map((tag) => (
            <Tag tagObject={tag} key={tag.tag} />
            ))}
        </div>
      </div>
    );
  }
  
  

function Trend({trendType, articleObjects, tagObjects}){
    return (
        <div className="h-1/4 w-full border border-l-transparent border-r-transparent border-t-transparent">
            <Articles trendObjects = {articleObjects} />
            <Tags trendObjects={tagObjects} />
        </div>
    )
}

export default Trend;