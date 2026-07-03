import CourseForm from "../components/courses/CourseForm"
import CourseList from "../components/courses/CourseList"
const Courses = () => {
  return (
        <div className="max-w-7xl mx-auto px-5 py-10">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#082A63]">
          Courses Management
        </h1>

        <p className="text-gray-500 mt-2">
          Add and view all training courses.
        </p>
      </div>

      <CourseForm />

      <div className="mt-10">
        <CourseList />
      </div>
    

    </div>

  )
}

export default Courses