import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Loading.css"

const Loading = () => {
    return <CircularProgress className="blue-loader" size={90} />
}

export default Loading;