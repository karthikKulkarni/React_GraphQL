import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Course from "./Course";

const Courses = () => (
  <Query
    query={gql`
      query getAllCoursesForId($courseID: Int!) {
        coursesForId(id: $courseID) {
          id
          title
          author
          description
          url
          topic
        }
      }
    `}
    variables={{ courseID: -1 }} // -1 - get all the courses, or use allCourses query
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;

      if (error) return <p>ERROR</p>;

      return data.coursesForId.map(course => {
        return (
          <div>
            <Course course={course} />
          </div>
        );
      });
    }}
  </Query>
);

export default Courses;
