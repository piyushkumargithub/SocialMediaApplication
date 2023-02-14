import { useContext } from "react";
import "./stories.scss";
import {AuthContext } from "../../context/authContext";

const Stories = () => {

    const {currentUser} =useContext(AuthContext);
  //tempdata
  const stories = [
    {
      id: 1,
      name: "john doe",
      img: "https://images.pexels.com/photos/6089788/pexels-photo-6089788.jpeg",
    },
    {
      id: 2,
      name: "john doe",
      img: "https://images.pexels.com/photos/6089788/pexels-photo-6089788.jpeg",
    },
    {
      id: 3,
      name: "john doe",
      img: "https://images.pexels.com/photos/6089788/pexels-photo-6089788.jpeg",
    },
    {
      id: 4,
      name: "john doe",
      img: "https://images.pexels.com/photos/6089788/pexels-photo-6089788.jpeg",
    },
    {
      id: 5,
      name: "john doe",
      img: "https://images.pexels.com/photos/6089788/pexels-photo-6089788.jpeg",
    },
    {
      id: 6,
      name: "john doe",
      img: "https://images.pexels.com/photos/6089788/pexels-photo-6089788.jpeg",
    },
  ];

  return (
    <div className="stories">
        <div className="story">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
            <button>+</button>
          </div>
      {stories.map((story) => {
        return (
          <div className="story">
            <img src={story.img} alt="" />
            <span>{story.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
