import React from "react";

const TextArea = ({ name, id, defaultMessage, disable, max, min , row}) => {
  return (
    <div>
      <textarea
        name={name}
        id={id}
        className="form-control"
        style={{ width: "100%" , height: "100px"}}
        rows={row}
        defaultValue={defaultMessage}
        disabled={disable}
        maxLength={max}
        minLength={min}
        placeholder="Enter your message here"
      ></textarea>
    </div>
  );
};

export default TextArea;
