import { productsDB } from '../database/products.js'

let courses = [...productsDB]

export const createCourse = (course) => {
  const newCourse = {
    id: courses.length > 0 ? Math.max(...courses.map(c => c.id)) + 1 : 1,
    ...course
  }
  courses.push(newCourse)
  return newCourse
}

export const readCourses = () => {
  return [...courses]
}

export const readCourse = (id) => {
  return courses.find(course => course.id === id)
}

export const updateCourse = (id, updates) => {
  const index = courses.findIndex(course => course.id === id)
  if (index !== -1) {
    courses[index] = { ...courses[index], ...updates }
    return courses[index]
  }
  return null
}

export const deleteCourse = (id) => {
  const index = courses.findIndex(course => course.id === id)
  if (index !== -1) {
    const deleted = courses.splice(index, 1)[0]
    return deleted
  }
  return null
}

export const resetCourses = () => {
  courses = [...productsDB]
}
