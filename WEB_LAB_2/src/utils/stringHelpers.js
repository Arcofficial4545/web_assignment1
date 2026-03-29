export const formatCategoryLabel = (category) => {
  return category.toUpperCase()
}

export const normalizeSearchTerm = (term) => {
  return term.toLowerCase().trim()
}

export const cleanUserInput = (input) => {
  return input.trim()
}

export const searchInCourseName = (courseName, searchTerm) => {
  return courseName.toLowerCase().includes(searchTerm.toLowerCase())
}

export const validateEmailPrefix = (email) => {
  return email.startsWith(`admin`) || email.startsWith(`user`)
}

export const validateFileExtension = (filename, extension) => {
  return filename.toLowerCase().endsWith(extension.toLowerCase())
}

export const splitFullName = (fullName) => {
  return fullName.split(' ')
}

export const joinNameParts = (parts) => {
  return parts.join(' ')
}

export const sanitizeCourseName = (name) => {
  return name.replace(/[^a-zA-Z0-9\s]/g, '')
}

export const extractCourseCode = (courseName, start, end) => {
  return courseName.slice(start, end)
}

export const formatCourseId = (id) => {
  return id.toString().padStart(4, '0')
}

export const formatInstructorName = (name, width) => {
  return name.padEnd(width, ' ')
}
