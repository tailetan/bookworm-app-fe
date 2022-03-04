import "./page-title.css";

function pageTitle(props){
return(
<div className="container">
    <div className="title-page ">
        <h4>{props.title} </h4>
    </div>
</div>
);
}

export default pageTitle;