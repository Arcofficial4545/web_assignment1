export const mapCoursesToDisplay = (courses) => {
  return courses.map(course => ({
    ...course,
    displayPrice: `$${course.price}`,
    displayStatus: course.inStock ? `Available` : `Coming Soon`
  }))
}

export const filterByCategory = (courses, category) => {
  if (!category || category === 'all') return courses
  return courses.filter(course => course.category === category)
}

export const filterByAvailability = (courses, inStock) => {
  return courses.filter(course => course.inStock === inStock)
}

export const findCourseById = (courses, id) => {
  return courses.find(course => course.id === id)
}

export const findCourseIndexById = (courses, id) => {
  return courses.findIndex(course => course.id === id)
}

export const hasAffordableCourses = (courses, maxPrice) => {
  return courses.some(course => course.price <= maxPrice)
}

export const areAllCoursesInStock = (courses) => {
  return courses.every(course => course.inStock === true)
}

export const calculateTotalPrice = (courses) => {
  return courses.reduce((total, course) => total + course.price, 0)
}

export const sortCoursesByPrice = (courses, ascending = true) => {
  return [...courses].sort((a, b) => ascending ? a.price - b.price : b.price - a.price)
}

export const sortCoursesByName = (courses, ascending = true) => {
  return [...courses].sort((a, b) => {
    const nameA = a.name.toLowerCase()
    const nameB = b.name.toLowerCase()
    if (ascending) {
      return nameA < nameB ? -1 : nameA > nameB ? 1 : 0
    } else {
      return nameA > nameB ? -1 : nameA < nameB ? 1 : 0
    }
  })
}

export const renderCoursesToDOM = (courses, containerId) => {
  const container = document.getElementById(containerId)
  if (!container) return
  
  courses.forEach(course => {
    const courseElement = document.createElement(`div`)
    courseElement.className = `course-item`
    courseElement.innerHTML = `
      <h3>${course.name}</h3>
      <p>Category: ${course.category}</p>
      <p>Price: $${course.price}</p>
      <p>Status: ${course.inStock ? `Available` : `Coming Soon`}</p>
    `
    container.appendChild(courseElement)
  })
}
