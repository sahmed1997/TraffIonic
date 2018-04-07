import {Component} from '@angular/core';
import {IonicPage, Loading, LoadingController, NavParams} from 'ionic-angular';
import {CourseDataProvider} from "../../providers/course-data/course-data";
import {Course} from "../../models/course/course.interface";
import {GlobalProfileProvider} from "../../providers/global-profile/global-profile";
import {Profile} from "../../models/profile/profile.interface";
import {UtilitiesProvider} from "../../providers/utilities/utilities";

@IonicPage()
@Component({
  selector: 'page-student-courses',
  templateUrl: 'courses.html',
})
export class StudentCoursesPage {

  studentCourses: Course[];
  profile = {} as Profile;
  loader: Loading;
  constructor(private navParams: NavParams,
              private courseData: CourseDataProvider,
              private globalProfile: GlobalProfileProvider,
              private loading: LoadingController,
              private utilities: UtilitiesProvider) {

    // this.utilities.resetCourses();
    // this.utilities.resetStudents();
    // this.utilities.resetInstructors();

    this.loader = this.loading.create({
      content: 'Loading courses...'
    });
  }

  ionViewDidLoad() {
    this.profile = this.globalProfile.getProfile();
    this.loader.present();

    this.courseData
      .getCourseList()
      .snapshotChanges()
      .map(changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }))
        }
      )
      .subscribe(courses => {
        this.studentCourses = courses.filter(course =>
              ((this.profile.instructor && this.profile.instructor.courses.indexOf(course.key) > -1) ||
          (this.profile.student && this.profile.student.courses.indexOf(course.key)) > -1));
        this.loader.dismiss();
      });
  }

  ionViewCanEnter(): boolean {
    return !!this.profile;
  }
}
