// Homework types
export interface Homework {
  id: string
  date: string
  class_name: string
  homework_text: string
  created_at: string
  completed: boolean
  due_date: string
}

export interface CreateHomeworkDTO {
  date: string
  class_name: string
  homework_text: string
  due_date?: string
}

// Checklist types
export interface ChecklistItem {
  id: string
  task_text: string
  completed: boolean
  created_date: string
  due_date?: string
  priority: 'low' | 'medium' | 'high'
}

export interface CreateChecklistDTO {
  task_text: string
  due_date?: string
  priority?: 'low' | 'medium' | 'high'
}

// Study Materials types
export interface StudyMaterial {
  id: string
  date: string
  file_name: string
  file_path: string
  subject?: string
  upload_date: string
  file_type: string
}

export interface CreateMaterialDTO {
  date: string
  file_name: string
  file_path: string
  subject?: string
  file_type: string
}

// Schedule types
export interface ScheduleItem {
  id: string
  date: string
  class_name: string
  time?: string
  assignments?: string
  tasks?: string
}
