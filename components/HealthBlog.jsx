import Health from "../HealthBlog.json";
import "./HealthBlog.css";
import { Link } from "react-router-dom";

const HealthBlog = () => {
  return (
    <div id="health" className="blog">
      {Health.map((blogs) => {
        return (
          <div key={blogs.id} className="blog-4">
            <h3 className="blog-5">{blogs.title}</h3>
            <p className="text-start">{blogs.content}</p>
            {/* <p>{blogs.link}</p> */}
            <button className="healthBtn">More</button>
          </div>
        );
      })}
    </div>
  );
};

export default HealthBlog;
