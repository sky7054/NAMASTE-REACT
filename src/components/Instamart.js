const section = (title,description) => {
    return(
        <div className="section-border">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>

    );
};

const InstaMart = () =>{
    return(
        <div>
            <h1 className="InstaMart">InstaMart</h1>

            <section 
            title = {"About Instamart"}
            description = {"this is about section of InstaMart"}
            />

            <section 
            title = {"Team Instamart"}
            description = {"this is Team section of InstaMart"}
            />

            <section 
            title = {"Careers Instamart"}
            description = {"this is Careers section of InstaMart"}
            />

        </div>
    );
};

export default InstaMart;