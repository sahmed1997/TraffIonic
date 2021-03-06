import {Course} from "../models/course/course.interface";

const courseList: Course[] = [
  {
    number: 'Comp225',
    title: 'Software Design',
    students: ['-L6mKXkPWGkzXvGeiIhh', '-L6mKXkUX52GIH7lmX5v', '-L6mKXkYvRO1D8dOoqxX'],
    instructors: [],
    officeHours: [],
    selection: ''
  },
  {
    number: 'Math236',
    title: 'Linear Algebra',
    students: ['-L6mKXkPWGkzXvGeiIhh', '-L6mKXkUX52GIH7lmX5v'],
    instructors: [],
    officeHours: [],
    selection: ''
  },
  {
    number: 'Comp221',
    title: 'Algorithm Design',
    students: ['-L6mKXkPWGkzXvGeiIhh', '-L6mKXkXCZjMfsK14X31'],
    instructors: [],
    officeHours: [],
    selection: ''
  },
  {
    number: 'Thda220',
    title: 'Physical Approaches',
    students: ['-L6mKXkPWGkzXvGeiIhh', '-L6mKXkXCZjMfsK14X31', '-L6mKXkYvRO1D8dOoqxX'],
    instructors: [],
    officeHours: [],
    selection: ''
  }
];

export const COURSE_LIST = courseList;
