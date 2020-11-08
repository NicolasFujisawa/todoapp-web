export default interface Todo {
  id: number
  task: string
  is_completed: boolean
  images: [
    {
      id: number
      url: string
    }
  ]
}
