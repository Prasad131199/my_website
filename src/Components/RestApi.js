import React, { useEffect, useState } from "react";

function RestApi() {

    const [data, setData] = useState([]);

    const apiGet = () => {

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => {setData(json)});
    };
    
    useEffect(() => {
        apiGet();
    }, []);



    return (
        <div>
            MY API <br />
            {/* {JSON.stringify(data,null, 5)} */}
            <button onClick={apiGet}> Fetch API </button>

            <div>
                <ul>
                    {data.map((item) => (
                        <li>{item.title}</li>

                    )


                    )}
                </ul>


            </div>
        </div>


    );
}

export default RestApi;

