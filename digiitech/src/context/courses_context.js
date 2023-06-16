import React, {useContext, useReducer, useEffect} from "react";
import { GET_CATEGORIES, GET_COURSES, GET_SINGLE_COURSE, GET_CAREER_RELATED_COURSES } from "../actions";
import reducer from "../reducers/courses_reducer";
import courses from "../utils/data";

const initialState = {
    courses: [],
    single_course: {},
    career_related_courses: [],
    categories: [],
}

const CoursesContext = React.createContext();

export const CoursesProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchCourse = () => {
        dispatch({type: GET_COURSES, payload: courses})
    }

    const fetchSingleCourse = (id) => {
        const singleCourse = courses.find(course => course.id === id);
        dispatch({type: GET_SINGLE_COURSE, payload: singleCourse})
    }

    const fetchCategories = () => {
        const categories = [...new Set(courses.map(item => item.category))];
        dispatch({type: GET_CATEGORIES, payload: categories});
    }

    const fetchCareerRelatedCourses = () => {
        dispatch({type: GET_CAREER_RELATED_COURSES, payload: courses})
    }

    useEffect(() => {
        fetchCourse();
        fetchCareerRelatedCourses();
        fetchCategories();
    }, []);

    return (
        <CoursesContext.Provider value = {{
            ...state,
            fetchSingleCourse
        }}>
            {children}
        </CoursesContext.Provider>
    )
}

export const useCoursesContext = () => {
    return useContext(CoursesContext);
}