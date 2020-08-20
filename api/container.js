// Inversion of control ( registering dependency injection )
const { asClass, createContainer, asFunction, asValue } = require('awilix');

// aplication start
const StartUp = require('./startup');
const Server = require('./server');
const config = require('../config/environments');

// routes
const Routes = require('./routes')
const StudentRoutes = require('./routes/student.routes');
const TeacherRoutes = require('./routes/teacher.routes');
const CourseRoutes = require('./routes/course.routes');
const SubjectRoutes = require('./routes/subject.routes');
const SectionRoutes = require('./routes/section.routes');
const RegistrationRoutes = require('./routes/registration.routes');

// repos
const { StudentRepository, TeacherRepository, CourseRepository,
  SubjectRepository, SectionRepository, RegistrationRepository } = require('../dal/repositories');

// controllers
const { StudentController, TeacherController, CourseController,
  SubjectController, SectionController, RegistrationController } = require('./controllers')

// bussiness
const { StudentBussiness, TeacherBussiness, CourseBussiness,
  SubjectBussiness, SectionBussiness, RegistrationBussiness } = require('../domain')

// services
const { StudentService, TeacherService, CourseService,
  SubjectService, SectionService, RegistrationService } = require('../services');

// Container creation
const container = createContainer();
const db = require('../dal/models')

container.register({
  app: asClass(StartUp).singleton(),
  router: asFunction(Routes).singleton(),
  server: asClass(Server).singleton(),
  StudentController: asClass(StudentController).singleton(),
  TeacherController: asClass(TeacherController).singleton(),
  CourseController: asClass(CourseController).singleton(),
  SubjectController: asClass(SubjectController).singleton(),
  SectionController: asClass(SectionController).singleton(),
  RegistrationController: asClass(RegistrationController).singleton(),

  StudentRoutes: asFunction(StudentRoutes).singleton(),
  TeacherRoutes: asFunction(TeacherRoutes).singleton(),
  CourseRoutes: asFunction(CourseRoutes).singleton(),
  SubjectRoutes: asFunction(SubjectRoutes).singleton(),
  SectionRoutes: asFunction(SectionRoutes).singleton(),
  RegistrationRoutes: asFunction(RegistrationRoutes).singleton(),
})
  .register({
    config: asValue(config),
  })
  .register({
    db: asValue(db)
  })
  .register({
    StudentService: asClass(StudentService).singleton(),
    TeacherService: asClass(TeacherService).singleton(),
    CourseService: asClass(CourseService).singleton(),
    SubjectService: asClass(SubjectService).singleton(),
    SectionService: asClass(SectionService).singleton(),
    RegistrationService: asClass(RegistrationService).singleton()
  })
  .register({
    StudentRepository: asClass(StudentRepository).singleton(),
    TeacherRepository: asClass(TeacherRepository).singleton(),
    CourseRepository: asClass(CourseRepository).singleton(),
    SubjectRepository: asClass(SubjectRepository).singleton(),
    SectionRepository: asClass(SectionRepository).singleton(),
    RegistrationRepository: asClass(RegistrationRepository).singleton()
  })
  .register({
    StudentBussiness: asClass(StudentBussiness).singleton(),
    TeacherBussiness: asClass(TeacherBussiness).singleton(),
    CourseBussiness: asClass(CourseBussiness).singleton(),
    SubjectBussiness: asClass(SubjectBussiness).singleton(),
    SectionBussiness: asClass(SectionBussiness).singleton(),
    RegistrationBussiness: asClass(RegistrationBussiness).singleton()
  })

module.exports = container;