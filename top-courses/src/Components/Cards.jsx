import { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses() {
        let allCourses = [];

        if(category == 'All'){
            Object.values(courses).forEach(item => {
                item.forEach(data => {
                    allCourses.push(data);
                })
            });
            return allCourses;
        }
        else{
            return courses[category];
        }
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map(course => {
                    return (<Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>)
                })
            }
        </div>
    );
}

export default Cards;