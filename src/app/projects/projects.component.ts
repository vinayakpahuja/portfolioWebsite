import {Component, OnInit} from '@angular/core';
import {Project} from '../services/project';
import {MymodalComponent} from '../mymodalcomponent/mymodalcomponent.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {initialState} from 'ngx-bootstrap/timepicker/reducer/timepicker.reducer';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];

  constructor(private modalService: NgbModal) {

  }

  ngOnInit() {
    this.populateProjects();
  }

  open(project: Project) {
    const modalRef = this.modalService.open(MymodalComponent);
    modalRef.componentInstance.title = project.title;
    modalRef.componentInstance.image = project.image;
    modalRef.componentInstance.description = project.description;
    modalRef.componentInstance.contribution = project.contribution;
    modalRef.componentInstance.technologiesUsed = project.technologiesUsed;
  }

  populateProjects() {
    this.projects = [
      {
        title: 'Cloud Data Center',
        image: 'assets/images/CloudDataPipeline.webp',
        // tslint:disable-next-line:max-line-length
        description: 'Created a complete serverless pipeline to capture, monitor and visualise millions of data which got updated every instant with 0% loss in AWS cloud infrastructure.',
        contribution: ['Developed whole pipeline single handedly for which was awarded by Evive Extra Miller Award.',
          'Designed a storage mechanism which can store approx infinite capacity of data with minimum cost.',
          'High Scalability of data to ensure data availability.',
          'Written Daily Job to ensure the removal of stale entries .',
          'Built a QuickSight Dashboard for better analysis using Aws Athena , Quicksight Dashboard.'],
        technologiesUsed: ['Java8', 'NodeJs', 'Kinesis', 'Lambdas', 'Postgresql', 'AWS glue', 'Quicksight']
      },
      {
        title: 'Tag Engine',
        image: 'assets/images/TagEngine.webp',
        description: 'Segment the Section of Users to group into certain criteria by using tags driven by rules.',
        contribution: ['Introduced folksonomy to provide automated benefit tags driven by rules.',
          'Connects with multiple micro services to support and provide for various products.',
          'Created Tag Rules with the Data Science team to ensure the correct section of people fall under the correct criteria.',
          'Created Apis that transform business ideas into solutions through code.',
          'Wrote Unit test cases to test the functionality of code.',
          'Use Postgres to store the data with Hibernate as ORM implementation'],
        technologiesUsed: ['Java8', 'Spring Boot', 'Ribbon', 'Consul', 'Postgresql']
      },
      {
        title: 'Command Center',
        image: 'assets/images/MyEvive.webp',
        // tslint:disable-next-line:max-line-length
        description: 'A single onboarding platform including vast products, ingestions and customizations which enables vendors and clients to initiate and continue an easy engagement.',
        // tslint:disable-next-line:max-line-length
        contribution: ['Worked and gained knowledge in creating backend apis in spring boot and handling data in Postgresql and Cassandra database using reactive concepts',
          'Built reusable code that could be utilised in other projects, effectively saving the company money.',
          'Introduced Reactive Programming to ensure Better performance and CPU utilization.',
          'Wrote the unit test cases in spring and mockito to test the functionality of code.'],
        technologiesUsed: ['Java8', 'Spring Boot', 'JPA', 'Flux and Mono', 'PostgreSql', 'AWS']
      },
      {
        title: 'FalconX',
        image: 'assets/images/FalconX.webp',
        // tslint:disable-next-line:max-line-length
        description: 'Part of a team who created a Fraud detection tool which contributes to the 40% revenue of FICO. With suspicious transactions detected by BI models we can judge transactions through the behavior of any individual.',
        contribution: ['Contributed in development of a microservice named gateway-service by creating backend and frontend apis.',
          'Part of Architectural team to design the architecture of the Product',
          'Created a roles api to decide how to display features based on the user roles.'],
        technologiesUsed: ['Java8', 'MongoDB', 'Angular 6', 'Typescript.']
      },
      {
        title: 'Hostel Refund Management',
        image: 'assets/images/Hostel.webp',
        // tslint:disable-next-line:max-line-length
        description: 'In Hostels, students need to give advance mess fees for a semester . If on any particular day if they miss the meal or meal quality is not good , they are not getting reimbursed for that meal .',
        contribution: ['Won the Inter Batch Project Competition and assured the implementation of the system.',
          // tslint:disable-next-line:max-line-length
          'Created Mess Management with refund policy that will ensure that a student needs to pay only for a meal he/she is taking otherwise the money will get reimbursed in the upcoming semester by using mess attendance feature on warden portal .'],
        technologiesUsed: ['Java', 'Javascript', 'Session Storage', 'Cassandra']
      }


    ];

  }

}
