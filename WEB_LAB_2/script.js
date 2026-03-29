import { toggleTheme } from './src/utils/theme.js'
import { createCourse, readCourses, updateCourse, deleteCourse } from './src/utils/crud.js'
import { 
  mapCoursesToDisplay, 
  filterByCategory, 
  sortCoursesByPrice, 
  sortCoursesByName,
  hasAffordableCourses,
  areAllCoursesInStock,
  calculateTotalPrice
} from './src/utils/filters.js'
import {
  normalizeSearchTerm,
  searchInCourseName,
  formatCourseId,
  cleanUserInput
} from './src/utils/stringHelpers.js'

window.handleThemeToggle = () => {
  toggleTheme()
}

let currentCourses = readCourses()
let filteredCourses = [...currentCourses]
let currentSort = 'name-asc'

const renderCourses = (courses) => {
  const container = document.getElementById('course-list')
  if (!container) return
  
  container.innerHTML = ''
  
  if (courses.length === 0) {
    container.innerHTML = '<p class="text-cream text-center col-span-full">No courses found</p>'
    return
  }
  
  const displayCourses = mapCoursesToDisplay(courses)
  
  displayCourses.forEach(course => {
    const card = document.createElement('div')
    card.className = 'course-card'
    card.innerHTML = `
      <h3>${course.name}</h3>
      <p><strong>Category:</strong> ${course.category}</p>
      <p><strong>Instructor:</strong> ${course.instructor}</p>
      <p><strong>Duration:</strong> ${course.duration}</p>
      <p class="price">${course.displayPrice}</p>
      <p><strong>Status:</strong> ${course.displayStatus}</p>
      <div style="margin-top: 1rem; display: flex; gap: 0.5rem;">
        <button onclick="editCourse(${course.id})" class="btn btn-secondary">Edit</button>
        <button onclick="removeCourse(${course.id})" class="btn btn-primary">Delete</button>
      </div>
    `
    container.appendChild(card)
  })
}

const applyFiltersAndSort = () => {
  const searchTerm = document.getElementById('search-input')?.value || ''
  const category = document.getElementById('category-filter')?.value || 'all'
  
  let result = [...currentCourses]
  
  if (category !== 'all') {
    result = filterByCategory(result, category)
  }
  
  if (searchTerm) {
    const normalized = normalizeSearchTerm(searchTerm)
    result = result.filter(course => searchInCourseName(course.name, normalized))
  }
  
  if (currentSort === 'price-asc') {
    result = sortCoursesByPrice(result, true)
  } else if (currentSort === 'price-desc') {
    result = sortCoursesByPrice(result, false)
  } else if (currentSort === 'name-asc') {
    result = sortCoursesByName(result, true)
  } else if (currentSort === 'name-desc') {
    result = sortCoursesByName(result, false)
  }
  
  filteredCourses = result
  renderCourses(result)
  updateStats()
}

const updateStats = () => {
  const statsContainer = document.getElementById('course-stats')
  if (!statsContainer) return
  
  const total = filteredCourses.length
  const totalPrice = calculateTotalPrice(filteredCourses)
  const hasAffordable = hasAffordableCourses(filteredCourses, 300)
  const allInStock = areAllCoursesInStock(filteredCourses)
  
  statsContainer.innerHTML = `
    <p>Total Courses: ${total}</p>
    <p>Total Value: ${totalPrice}</p>
    <p>Has Affordable Options: ${hasAffordable ? 'Yes' : 'No'}</p>
    <p>All Available: ${allInStock ? 'Yes' : 'No'}</p>
  `
}

window.editCourse = (id) => {
  const course = currentCourses.find(c => c.id === id)
  if (!course) return
  
  document.getElementById('course-id').value = course.id
  document.getElementById('course-name').value = course.name
  document.getElementById('course-category').value = course.category
  document.getElementById('course-price').value = course.price
  document.getElementById('course-instructor').value = course.instructor
  document.getElementById('course-duration').value = course.duration
  document.getElementById('course-instock').checked = course.inStock
  
  document.getElementById('form-title').textContent = 'Edit Course'
  document.getElementById('submit-btn').textContent = 'Update Course'
}

window.removeCourse = (id) => {
  if (confirm('Are you sure you want to delete this course?')) {
    deleteCourse(id)
    currentCourses = readCourses()
    applyFiltersAndSort()
  }
}

const initializeCourseManagement = () => {
  const form = document.getElementById('course-form')
  if (!form) return
  
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const id = parseInt(document.getElementById('course-id').value)
    const name = cleanUserInput(document.getElementById('course-name').value)
    const category = document.getElementById('course-category').value
    const price = parseFloat(document.getElementById('course-price').value)
    const instructor = cleanUserInput(document.getElementById('course-instructor').value)
    const duration = cleanUserInput(document.getElementById('course-duration').value)
    const inStock = document.getElementById('course-instock').checked
    
    if (id) {
      updateCourse(id, { name, category, price, instructor, duration, inStock })
    } else {
      createCourse({ name, category, price, instructor, duration, inStock })
    }
    
    currentCourses = readCourses()
    applyFiltersAndSort()
    form.reset()
    document.getElementById('course-id').value = ''
    document.getElementById('form-title').textContent = 'Add New Course'
    document.getElementById('submit-btn').textContent = 'Add Course'
  })
  
  const searchInput = document.getElementById('search-input')
  if (searchInput) {
    searchInput.addEventListener('input', applyFiltersAndSort)
  }
  
  const categoryFilter = document.getElementById('category-filter')
  if (categoryFilter) {
    categoryFilter.addEventListener('change', applyFiltersAndSort)
  }
  
  const sortSelect = document.getElementById('sort-select')
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value
      applyFiltersAndSort()
    })
  }
  
  applyFiltersAndSort()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeCourseManagement)
} else {
  initializeCourseManagement()
}
